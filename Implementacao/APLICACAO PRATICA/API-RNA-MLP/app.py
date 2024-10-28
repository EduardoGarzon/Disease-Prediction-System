# Importando as bibliotecas necessarias.
from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import numpy as np
import pandas as pd
import tensorflow as tf
import joblib 

# Inicializa a aplicação Flask.
app = Flask(__name__)

# Habilita CORS para todas as rotas
CORS(app)  

# Carrega o modelo MLP salvo do google colab.
model = load_model("RNA_MLP.h5")

# Carrega o scaler previamente salvo utilizado no google colab.
scaler = joblib.load("scaler.pkl")

# Carregar o LabelEncoder ajustado utilizado no google colab.
label_encoder = joblib.load('label_encoder.pkl')

# Dicionario de sintomas e seus respectivos pesos.
weights_dict = {
    'abdominal_pain': 4,
    'abnormal_menstruation': 6,
    'acidity': 3,
    'acute_liver_failure': 6,
    'altered_sensorium': 2,
    'anxiety': 4,
    'back_pain': 3,
    'belly_pain': 4,
    'blackheads': 2,
    'bladder_discomfort': 4,
    'blister': 4,
    'blood_in_sputum': 5,
    'bloody_stool': 5,
    'blurred_and_distorted_vision': 5,
    'breathlessness': 4,
    'brittle_nails': 5,
    'bruising': 4,
    'burning_micturition': 6,
    'chest_pain': 7,
    'chills': 3,
    'cold_hands_and_feet': 5,
    'coma': 7,
    'congestion': 5,
    'constipation': 4,
    'continuous_feel_of_urine': 6,
    'continuous_sneezing': 4,
    'cough': 4,
    'cramps': 4,
    'dark_urine': 4,
    'dehydration': 4,
    'depression': 3,
    'diarrhoea': 6,
    'dischromic_patches': 6,
    'distention_of_abdomen': 4,
    'dizziness': 4,
    'drying_and_tingling_lips': 4,
    'enlarged_thyroid': 6,
    'excessive_hunger': 4,
    'extra_marital_contacts': 5,
    'family_history': 5,
    'fast_heart_rate': 5,
    'fatigue': 4,
    'fluid_overload': 6,
    'fluid_overload': 4,
    'foul_smell_of_urine': 5,
    'headache': 3,
    'high_fever': 7,
    'hip_joint_pain': 2,
    'history_of_alcohol_consumption': 5,
    'increased_appetite': 5,
    'indigestion': 5,
    'inflammatory_nails': 2,
    'internal_itching': 4,
    'irregular_sugar_level': 5,
    'irritability': 2,
    'irritation_in_anus': 6,
    'itching': 1,
    'joint_pain': 3,
    'knee_pain': 3,
    'lack_of_concentration': 3,
    'lethargy': 2,
    'loss_of_appetite': 4,
    'loss_of_balance': 4,
    'loss_of_smell': 3,
    'loss_of_taste': 5,
    'malaise': 6,
    'mild_fever': 5,
    'mood_swings': 3,
    'movement_stiffness': 5,
    'mucoid_sputum': 4,
    'muscle_pain': 2,
    'muscle_wasting': 3,
    'muscle_weakness': 2,
    'nausea': 5,
    'neck_pain': 5,
    'nodal_skin_eruptions': 4,
    'obesity': 4,
    'pain_behind_the_eyes': 4,
    'pain_during_bowel_movements': 5,
    'pain_in_anal_region': 6,
    'painful_walking': 2,
    'palpitations': 4,
    'passage_of_gases': 5,
    'patches_in_throat': 6,
    'phlegm': 5,
    'polyuria': 4,
    'prominent_veins_on_calf': 6,
    'puffy_face_and_eyes': 5,
    'pus_filled_pimples': 2,
    'receiving_blood_transfusion': 5,
    'receiving_unsterile_injections': 2,
    'red_sore_around_nose': 2,
    'red_spots_over_body': 3,
    'redness_of_eyes': 5,
    'restlessness': 5,
    'runny_nose': 5,
    'rusty_sputum': 4,
    'scurrying': 2,
    'shivering': 5,
    'silver_like_dusting': 2,
    'sinus_pressure': 4,
    'skin_peeling': 3,
    'skin_rash': 3,
    'slurred_speech': 4,
    'small_dents_in_nails': 2,
    'spinning_movements': 6,
    'spotting_urination': 6,
    'stiff_neck': 4,
    'stomach_bleeding': 6,
    'stomach_pain': 5,
    'sunken_eyes': 3,
    'sweating': 3,
    'swelled_lymph_nodes': 6,
    'swelling_joints': 5,
    'swelling_of_stomach': 7,
    'swollen_blood_vessels': 5,
    'swollen_extremities': 5,
    'swollen_legs': 5,
    'throat_irritation': 4,
    'tiredness': 5,
    'toxic_look_(typhus)': 5,
    'ulcers_on_tongue': 4,
    'unsteadiness': 4,
    'visual_disturbances': 3,
    'vomiting': 5,
    'watering_from_eyes': 4,
    'weakness_in_limbs': 7,
    'weakness_of_one_body_side': 4,
    'weight_gain': 3,
    'weight_loss': 3,
    'yellow_crust_ooze': 3,
    'yellow_urine': 4,
    'yellowing_of_eyes': 4,
    'yellowish_skin': 3
}

# Tamanho da entrada da RNA.
input_shape = 134

# Caminho do arquivo dataset de treinamento.
file_path = 'Training-Classificado.csv'

# Define o endpoint /diagnostico que responde às requisições POST.
@app.route('/diagnostico', methods=['POST'])
def diagnostico():
    
    # Recebendo os dados do paciente informados pelo formulário frontend.
    data = request.json
    sintomas_informados = data['sintomas']

    # Lendo os dados do dataset de treinamento.
    data_train = pd.read_csv(file_path, delimiter=';')
    
    # Extraindo apenas as colunas dos sintomas do dataset de treinamento.
    symptoms_list = data_train.drop('prognosis', axis=1)
    
    # Inicializa um vetor com zeros de tamanho igual ao número total de sintomas do dataset.
    input_vector = np.zeros(input_shape)

    # Preenche a entrada com os pesos respectivos dos sintomas que o paciente informou.
    for symptom in sintomas_informados:
        if symptom in weights_dict:
            # Obtém o índice da coluna correspondente ao sintoma.
            index = symptoms_list.columns.get_loc(symptom)
            # Atribui o peso do sintoma.
            input_vector[index] = weights_dict[symptom]  

    # Verifica se a entrada tem o tamanho correto.
    if input_vector.size != input_shape:
        return jsonify({'error': 'Entrada de sintomas não está correta.'}), 400

    # Transformar o vetor em DataFrame para normalização.
    input_data_df = pd.DataFrame(input_vector.reshape(1, -1), columns=symptoms_list.columns)

    # Normalizar a entrada (usando o mesmo scaler do treinamento e teste).
    input_data_normalized = scaler.transform(input_data_df)

    # Fazer a previsão utilizando a MLP treinada.
    previsao = model.predict(input_data_normalized)
    
    # Transforma a classe prevista de volta para o nome da classe.
    diagnostico = int(np.argmax(previsao))
    diagnostico_nome = label_encoder.inverse_transform([diagnostico])
    
    # Classe com maior probabilidade, convertendo para int.
    diagnostico = int(np.argmax(previsao))  

    # Retorna o nome da classe prevista.
    return jsonify({
        'sintomas_informados': sintomas_informados,
        'diagnostico': diagnostico_nome[0]
    })

# Executa a aplicação Flask em modo de depuração, 
# (debug=True) para identificar erros durante o desenvolvimento.
if __name__ == '__main__':
    app.run(debug=True)