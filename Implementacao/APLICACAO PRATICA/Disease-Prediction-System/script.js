// Lista de sintomas com suas respectivas traducoes.
const sintomas_lista = {
    "abdominal_pain": "Dor abdominal",
    "abnormal_menstruation": "Menstruação anormal",
    "acidity": "Acidez",
    "acute_liver_failure": "Falência hepática aguda",
    "altered_sensorium": "Alteração da sensorialidade",
    "anxiety": "Ansiedade",
    "back_pain": "Dor nas costas",
    "belly_pain": "Dor no abdômen",
    "blackheads": "Cravos",
    "bladder_discomfort": "Desconforto na bexiga",
    "blister": "Bolha",
    "blood_in_sputum": "Sangue no escarro",
    "bloody_stool": "Fezes com sangue",
    "blurred_and_distorted_vision": "Visão turva e distorcida",
    "breathlessness": "Falta de ar",
    "brittle_nails": "Unhas quebradiças",
    "bruising": "Hematomas",
    "burning_micturition": "Micção ardente",
    "chest_pain": "Dor no peito",
    "chills": "Calafrios",
    "cold_hands_and_feet": "Mãos e pés frios",
    "coma": "Coma",
    "congestion": "Congestão",
    "constipation": "Constipação",
    "continuous_feel_of_urine": "Sensação contínua de urina",
    "continuous_sneezing": "Espirros contínuos",
    "cough": "Tosse",
    "cramps": "Cãibras",
    "dark_urine": "Urina escura",
    "dehydration": "Desidratação",
    "depression": "Depressão",
    "diarrhoea": "Diarréia",
    "dyschromic_patches": "Manchas discrômicas",
    "distention_of_abdomen": "Distensão abdominal",
    "dizziness": "Tontura",
    "drying_and_tingling_lips": "Lábios secos e com formigamento",
    "enlarged_thyroid": "Tireoide aumentada",
    "excessive_hunger": "Fome excessiva",
    "extra_marital_contacts": "Contatos extraconjugais",
    "family_history": "Histórico familiar",
    "fast_heart_rate": "Batimento cardíaco acelerado",
    "fatigue": "Fadiga",
    "fluid_overload": "Sobrecarga de fluidos",
    "foul_smell_of_urine": "Cheiro forte na urina",
    "headache": "Dor de cabeça",
    "high_fever": "Febre alta",
    "hip_joint_pain": "Dor na articulação do quadril",
    "history_of_alcohol_consumption": "Histórico de consumo de álcool",
    "increased_appetite": "Apetite aumentado",
    "indigestion": "Indigestão",
    "inflammatory_nails": "Unhas inflamadas",
    "internal_itching": "Coceira interna",
    "irregular_sugar_level": "Nível de açúcar irregular",
    "irritability": "Irritabilidade",
    "irritation_in_anus": "Irritação no ânus",
    "itching": "Coceira",
    "joint_pain": "Dor nas articulações",
    "knee_pain": "Dor no joelho",
    "lack_of_concentration": "Falta de concentração",
    "lethargy": "Letargia",
    "loss_of_appetite": "Perda de apetite",
    "loss_of_balance": "Perda de equilíbrio",
    "loss_of_smell": "Perda de olfato",
    "loss_of_taste": "Perda de paladar",
    "malaise": "Mal-estar",
    "mild_fever": "Febre leve",
    "mood_swings": "Oscilações de humor",
    "movement_stiffness": "Rigidez de movimentos",
    "mucoid_sputum": "Escarro mucoso",
    "muscle_pain": "Dor muscular",
    "muscle_wasting": "Perda muscular",
    "muscle_weakness": "Fraqueza muscular",
    "nausea": "Náusea",
    "neck_pain": "Dor no pescoço",
    "nodal_skin_eruptions": "Eruptões cutâneas nodulares",
    "obesity": "Obesidade",
    "pain_behind_the_eyes": "Dor atrás dos olhos",
    "pain_during_bowel_movements": "Dor durante evacuações",
    "pain_in_anal_region": "Dor na região anal",
    "painful_walking": "Dor ao andar",
    "palpitations": "Palpitações",
    "passage_of_gases": "Passagem de gases",
    "patches_in_throat": "Manchas na garganta",
    "phlegm": "Catarro",
    "polyuria": "Poliúria",
    "prominent_veins_on_calf": "Veias proeminentes na panturrilha",
    "puffy_face_and_eyes": "Rosto e olhos inchados",
    "pus_filled_pimples": "Espinhas com pus",
    "receiving_blood_transfusion": "Recebimento de transfusão de sangue",
    "receiving_unsterile_injections": "Recebimento de injeções não esterilizadas",
    "red_sore_around_nose": "Ferida vermelha ao redor do nariz",
    "red_spots_over_body": "Manchas vermelhas pelo corpo",
    "redness_of_eyes": "Vermelhidão nos olhos",
    "restlessness": "Inquietação",
    "runny_nose": "Nariz escorrendo",
    "rusty_sputum": "Escarro enferrujado",
    "scurrying": "Movimentação involuntária",
    "shivering": "Tremores",
    "silver_like_dusting": "Pó prateado",
    "sinus_pressure": "Pressão sinusal",
    "skin_peeling": "Descamação da pele",
    "skin_rash": "Erupção cutânea",
    "slurred_speech": "Fala arrastada",
    "small_dents_in_nails": "Pequenas depressões nas unhas",
    "spinning_movements": "Movimentos giratórios",
    "spotting_urination": "Sangramento urinário",
    "stiff_neck": "Pescoço rígido",
    "stomach_bleeding": "Sangramento no estômago",
    "stomach_pain": "Dor de estômago",
    "sunken_eyes": "Olhos fundos",
    "sweating": "Suor",
    "swelled_lymph_nodes": "Linfonodos inchados",
    "swelling_joints": "Inchaço nas articulações",
    "swelling_of_stomach": "Inchaço no estômago",
    "swollen_blood_vessels": "Vasos sanguíneos inchados",
    "swollen_extremities": "Extremidades inchadas",
    "swollen_legs": "Pernas inchadas",
    "throat_irritation": "Irritação na garganta",
    "tiredness": "Cansaço",
    "toxic_look_(typhus)": "Aparência tóxica (tifo)",
    "ulcers_on_tongue": "Úlceras na língua",
    "unsteadiness": "Instabilidade",
    "visual_disturbances": "Distúrbios visuais",
    "vomiting": "Vômito",
    "watering_from_eyes": "Lacrimejamento",
    "weakness_in_limbs": "Fraqueza nos membros",
    "weakness_of_one_body_side": "Fraqueza de um lado do corpo",
    "weight_gain": "Ganho de peso",
    "weight_loss": "Perda de peso",
    "yellow_crust_ooze": "Crosta amarela",
    "yellow_urine": "Urina amarela",
    "yellowing_of_eyes": "Amarelamento dos olhos",
    "yellowish_skin": "Pele amarelada"
};

// Lista de classes de doencas com suas respectivas doencas.
const doencas_lista = {
    "Respiratórias": [
        "Asma Brônquica",
        "Resfriado Comum",
        "Covid",
        "Pneumonia"
    ],
    "Infecciosas (Vírus e Bactérias)": [
        "Catapora",
        "Dengue",
        "Hepatite A",
        "Hepatite B",
        "Hepatite C",
        "Hepatite D",
        "Hepatite E",
        "Tuberculose",
        "Tifo",
        "Malária",
        "AIDS",
        "Infecção do Trato Urinário"
    ],
    "Inflamatórias e Autoimunes": [
        "Artrite",
        "Psoríase",
        "Osteoartrite"
    ],
    "Metabólicas e Endócrinas": [
        "Diabetes",
        "Hipertireoidismo",
        "Hipotireoidismo",
        "Hipoglicemia"
    ],
    "Gastrointestinais e Hepáticas": [
        "Hepatite Alcoólica",
        "Colestase Crônica",
        "GERD (Doença do Refluxo Gastroesofágico)",
        "Gastroenterite",
        "Icterícia",
        "Doença Úlcera Péptica",
        "Hemorróidas Dimórficas"
    ],
    "Dermatológicas": [
        "Acne",
        "Infecção Fúngica",
        "Impétigo"
    ],
    "Cardiovasculares e Circulatórias": [
        "Infarto",
        "Hipertensão",
        "Veias Varicosas"
    ],
    "Reações Alérgicas e Medicamentosas": [
        "Alergia",
        "Reação a Medicamento"
    ],
    "Neurológicas": [
        "Espondilose Cervical",
        "Enxaqueca",
        "Paralisia (Hemorragia Cerebral)",
        "Vertigem Posicional Paroxística"
    ]
};

// Lista de doencas e suas precaucoes.
const precautions_dict = {
    "Acne": "evitar muitos produtos",
    "AIDS": "acompanhamento",
    "Hepatite alcoólica": "acompanhamento",
    "Alergia": "usar gelo para comprimir a coceira",
    "Artrite": "massagem",
    "Asma brônquica": "procurar ajuda",
    "Espondilose cervical": "consultar um médico",
    "Catapora": "evitar lugares públicos",
    "Colestase crônica": "comer saudável",
    "Resfriado comum": "manter a febre sob controle",
    "Covid": "medicação",
    "Dengue": "manter-se hidratado",
    "Diabetes": "acompanhamento",
    "Hemorróidas dimórficas": "consumir suco de aloe vera",
    "Reação a medicamentos": "acompanhamento",
    "Infecção fúngica": "usar roupas limpas",
    "Gastroenterite": "retornar gradualmente à alimentação",
    "DRGE": "exercitar-se",
    "Infarto": "nulo",
    "Hepatite A": "medicação",
    "Hepatite B": "medicação",
    "Hepatite C": "medicação",
    "Hepatite D": "acompanhamento",
    "Hepatite E": "medicação",
    "Hipertensão": "ter um sono adequado",
    "Hipertireoidismo": "fazer tratamento com iodo radioativo",
    "Hipoglicemia": "consultar um médico",
    "Hipotireoidismo": "ter um sono adequado",
    "Impetigo": "consultar um médico",
    "Icterícia": "medicação",
    "Malária": "manter os mosquitos afastados",
    "Enxaqueca": "consultar um médico",
    "Osteoartrite": "banhos de sal",
    "Paralisia (hemorragia cerebral)": "consultar um médico",
    "Vértigo posicional paroxístico": "relaxar",
    "Doença ulcerosa péptica": "limitar o consumo de álcool",
    "Pneumonia": "acompanhamento",
    "Psoríase": "banhos de sal",
    "Tuberculose": "descansar",
    "Tifo": "medicação",
    "Infecção do trato urinário": "tomar probióticos",
    "Varizes": "não ficar parado por muito tempo"
}

// Lista de doencas e suas descricoes.
const descriptions_dict = {
    "AIDS": "A síndrome da imunodeficiência adquirida (AIDS) é uma condição crônica, potencialmente ameaçadora à vida, causada pelo vírus da imunodeficiência humana (HIV). Ao danificar seu sistema imunológico, o HIV interfere na capacidade do seu corpo de combater infecções e doenças.",
    "Acne": "A acne vulgar é a formação de comedões, pápulas, pústulas, nódulos e/ou cistos como resultado da obstrução e inflamação das unidades pilossebáceas (folículos pilosos e suas glândulas sebáceas acompanhantes). A acne se desenvolve no rosto e na parte superior do tronco, afetando mais frequentemente os adolescentes.",
    "Hepatite alcoólica": "A hepatite alcoólica é uma condição inflamatória do fígado causada pelo consumo excessivo de álcool ao longo de um período prolongado. Ela também é agravada pelo consumo excessivo de álcool e pelo uso contínuo de bebidas alcoólicas. Se você desenvolver essa condição, deve parar de beber álcool.",
    "Alergia": "Uma alergia é uma resposta do sistema imunológico a uma substância estranha que não é tipicamente prejudicial ao seu corpo. Elas podem incluir certos alimentos, pólen ou caspa de animais. O trabalho do seu sistema imunológico é mantê-lo saudável, combatendo patógenos nocivos.",
    "Artrite": "A artrite é o inchaço e a sensibilidade de uma ou mais articulações. Os principais sintomas da artrite são dor e rigidez nas articulações, que geralmente pioram com a idade. Os tipos mais comuns de artrite são a osteoartrite e a artrite reumatoide.",
    "Asma brônquica": "A asma brônquica é uma condição médica que causa o inchaço e o estreitamento das vias aéreas dos pulmões. Devido a esse inchaço, o caminho do ar produz muco excessivo, dificultando a respiração, resultando em tosse, falta de ar e chiado. A doença é crônica e interfere no trabalho diário.",
    "Espondilose cervical": "A espondilose cervical é um termo geral para o desgaste relacionado à idade que afeta os discos da coluna no seu pescoço. À medida que os discos se desidratam e encolhem, sinais de osteoartrite se desenvolvem, incluindo projeções ósseas ao longo das bordas dos ossos (esporões ósseos).",
    "Catapora": "A catapora é uma doença altamente contagiosa causada pelo vírus varicela-zoster (VZV). Ela pode causar uma erupção cutânea semelhante a bolhas e coceira. A erupção primeiro aparece no peito, nas costas e no rosto, e depois se espalha por todo o corpo, causando entre 250 e 500 bolhas coceira.",
    "Colestase crônica": "As doenças colestáticas crônicas, que ocorrem na infância, na adolescência ou na idade adulta, são caracterizadas pelo transporte defeituoso de ácidos biliares do fígado para o intestino, causado por danos primários ao epitélio biliar na maioria dos casos.",
    "Resfriado comum": "O resfriado comum é uma infecção viral do nariz e da garganta (trato respiratório superior). É geralmente inofensivo, embora possa não parecer. Muitos tipos de vírus podem causar um resfriado comum.",
    "Covid": "A COVID-19 (Coronavírus) afeta diferentes pessoas de maneiras diferentes. Ela afeta os pulmões. A maioria das pessoas infectadas desenvolverá uma doença leve a moderada e se recuperará sem hospitalização.",
    "Dengue": "A dengue é uma doença infecciosa aguda causada por um flavivírus (espécie do vírus da dengue do gênero Flavivirus), transmitida por mosquitos Aedes e caracterizada por dor de cabeça, dor articular severa e erupção cutânea.",
    "Diabetes": "O diabetes é uma doença que ocorre quando seu nível de glicose no sangue, também chamado de açúcar no sangue, está muito alto. A glicose é sua principal fonte de energia e vem dos alimentos que você come. A insulina, um hormônio produzido pelo pâncreas, ajuda a glicose dos alimentos a entrar nas células para ser usada como energia.",
    "Hemorróidas dimórficas": "Hemorróidas, também escritas como haemorróidas, são estruturas vasculares no canal anal. Em suas ... Outros nomes: Hemorróidas, pilas, doença hemorróida.",
    "Reação a medicamentos": "Uma reação adversa a medicamentos (RAM) é uma lesão causada pela ingestão de medicação. As RAMs podem ocorrer após uma única dose ou administração prolongada de um medicamento ou resultar da combinação de dois ou mais medicamentos.",
    "Infecção fúngica": "Em humanos, infecções fúngicas ocorrem quando um fungo invasor toma conta de uma área do corpo e é demais para o sistema imunológico lidar. Fungos podem viver no ar, no solo, na água e em plantas. Alguns fungos vivem naturalmente no corpo humano. Assim como muitos micróbios, há fungos úteis e fungos nocivos.",
    "DRGE": "A doença do refluxo gastroesofágico (DRGE) é um distúrbio digestivo que afeta o esfíncter esofágico inferior (EEI), o anel muscular entre o esôfago e o estômago. Muitas pessoas, incluindo mulheres grávidas, sofrem de azia ou indigestão ácida causada pela DRGE.",
    "Gastroenterite": "A gastroenterite é uma inflamação do trato digestivo, particularmente do estômago e dos intestinos grosso e delgado. A gastroenterite viral e bacteriana são infecções intestinais associadas a sintomas de diarreia, cólicas abdominais, náusea e vômito.",
    "Infarto": "A morte do músculo cardíaco devido à perda de suprimento sanguíneo. A perda de suprimento sanguíneo é geralmente causada por um bloqueio completo de uma artéria coronária, uma das artérias que fornecem sangue ao músculo cardíaco.",
    "Hepatite A": "A hepatite A é uma infecção hepática altamente contagiosa causada pelo vírus da hepatite A. O vírus é um dos vários tipos de vírus da hepatite que causam inflamação e afetam a capacidade do seu fígado de funcionar.",
    "Hepatite B": "A hepatite B é uma infecção do fígado. Ela pode causar cicatrização do órgão, falência hepática e câncer. Pode ser fatal se não for tratada. É transmitida quando pessoas entram em contato com o sangue, feridas abertas ou fluidos corporais de alguém que tem o vírus da hepatite B.",
    "Hepatite C": "Inflamação do fígado devido ao vírus da hepatite C (HCV), que é geralmente transmitido via transfusão de sangue (raramente), hemodiálise e picadas de agulha. O dano que a hepatite C causa ao fígado pode levar à cirrose e suas complicações, bem como câncer.",
    "Hepatite D": "A hepatite D, também conhecida como vírus da hepatite delta, é uma infecção que causa inflamação do fígado. Esse inchaço pode prejudicar a função hepática e causar problemas hepáticos a longo prazo, incluindo cicatrização do fígado e câncer. A condição é causada pelo vírus da hepatite D (HDV).",
    "Hepatite E": "Uma forma rara de inflamação do fígado causada pela infecção com o vírus da hepatite E (HEV). É transmitida através de alimentos ou bebidas manuseadas por uma pessoa infectada ou através de suprimentos de água contaminada em áreas onde o material fecal pode entrar na água. A hepatite E não causa doenças hepáticas crônicas.",
    "Hipertensão": "A hipertensão (HTN ou HT), também conhecida como pressão alta (PA), é uma condição médica de longo prazo em que a pressão arterial nas artérias está persistentemente elevada. A pressão alta geralmente não causa sintomas.",
    "Hipertireoidismo": "O hipertireoidismo (tireóide hiperativa) ocorre quando sua glândula tireoide produz excesso do hormônio tiroxina. O hipertireoidismo pode acelerar o metabolismo do seu corpo, causando perda de peso involuntária e um ritmo cardíaco rápido ou irregular.",
    "Hipoglicemia": "A hipoglicemia é uma condição em que seu nível de açúcar no sangue (glicose) está abaixo do normal. A glicose é a principal fonte de energia do seu corpo. A hipoglicemia está frequentemente relacionada ao tratamento do diabetes. Mas outros medicamentos e uma variedade de condições — muitas raras — podem causar baixo nível de açúcar no sangue em pessoas que não têm diabetes.",
    "Hipotireoidismo": "O hipotireoidismo, também chamado de tireoide hipoativa ou baixa tireoide, é um distúrbio do sistema endócrino em que a glândula tireoide não produz hormônio tireoidiano suficiente.",
    "Impetigo": "O impetigo é uma infecção cutânea comum e altamente contagiosa que afeta principalmente bebês e crianças. O impetigo geralmente se apresenta como feridas vermelhas no rosto, especialmente ao redor do nariz e boca da criança, e nas mãos e pés. As feridas se rompem e desenvolvem crostas de cor mel.",
    "Icterícia": "Icterícia é a coloração amarela da pele e das escleróticas (parte branca dos olhos) devido a níveis anormalmente altos do pigmento biliar bilirrubina no sangue. O amarelamento se estende a outros tecidos e fluidos corporais. A icterícia já foi chamada de 'Morbus regius' (a doença régia) na crença de que apenas o toque de um rei poderia curá-la.",
    "Malária": "A malária é uma doença infecciosa causada por protozoários do gênero Plasmodium, que podem ser transmitidos pela picada do mosquito Anopheles ou por uma agulha ou transfusão contaminada. A malária falciparum é o tipo mais mortal.",
    "Enxaqueca": "Uma enxaqueca pode causar dor intensa pulsante ou uma sensação de pulsação, geralmente de um lado da cabeça. Muitas vezes é acompanhada por náuseas, vômitos e sensibilidade extrema à luz e ao som. As crises de enxaqueca podem durar horas ou dias, e a dor pode ser tão intensa que interfere nas atividades diárias.",
    "Osteoartrite": "A osteoartrite é a forma mais comum de artrite, afetando milhões de pessoas em todo o mundo. Ela ocorre quando a cartilagem protetora que amortece as extremidades dos ossos se desgasta com o tempo.",
    "Paralisia (hemorragia cerebral)": "A hemorragia intracerebral (HIC) ocorre quando o sangue se rompe subitamente no tecido cerebral, causando danos ao seu cérebro. Os sintomas geralmente aparecem de repente durante a HIC. Eles incluem dor de cabeça, fraqueza, confusão e paralisia, particularmente de um lado do corpo.",
    "Vertigem Posicional Paroxística Benigna": "A vertigem posicional paroxística benigna (VPPB) é uma das causas mais comuns de vertigem — a sensação súbita de que você está girando ou que o interior da sua cabeça está girando. A VPPB causa episódios breves de tontura leve a intensa.",
    "Doença do úlcera péptica": "A doença do úlcera péptica (DUP) é uma ruptura na mucosa interna do estômago, da primeira parte do intestino delgado ou, às vezes, do esôfago inferior. Uma úlcera no estômago é chamada de úlcera gástrica, enquanto uma na primeira parte dos intestinos é chamada de úlcera duodenal.",
    "Pneumonia": "A pneumonia é uma infecção em um ou ambos os pulmões. É causada por bactérias, vírus e fungos. A infecção causa inflamação nos alvéolos, que são os sacos de ar nos pulmões. Os alvéolos se enchem de líquido ou pus, dificultando a respiração.",
    "Psoríase": "A psoríase é uma doença cutânea comum que forma manchas grossas, vermelhas e com protuberâncias cobertas por escamas prateadas. Elas podem surgir em qualquer lugar, mas aparecem com mais frequência no couro cabeludo, cotovelos, joelhos e parte inferior das costas. A psoríase não é contagiosa, mas pode ocorrer em membros da mesma família.",
    "Tuberculose": "A tuberculose (TB) é uma doença infecciosa geralmente causada pela bactéria Mycobacterium tuberculosis (MTB). A tuberculose geralmente afeta os pulmões, mas também pode afetar outras partes do corpo. A maioria das infecções não apresenta sintomas, caso em que é conhecida como tuberculose latente.",
    "Febre tifóide": "Uma doença aguda caracterizada por febre causada pela infecção com a bactéria Salmonella typhi. A febre tifóide tem um início insidioso, com febre, dor de cabeça, constipação, mal-estar, calafrios e dor muscular. A diarreia é incomum, e o vômito geralmente não é severo.",
    "Infecção do trato urinário": "Uma infecção nos rins, ureteres, bexiga ou uretra, abreviada como ITU. Nem todos com uma ITU apresentam sintomas, mas os sintomas comuns incluem uma vontade frequente de urinar e dor ou queimação ao urinar.",
    "Varizes": "Uma veia que se dilatou e torceu, geralmente aparecendo como um vaso sanguíneo azul saliente, claramente visível através da pele. As varizes são mais comuns em adultos mais velhos, especialmente mulheres, e ocorrem especialmente nas pernas."
}

let formulario = document.getElementById('sintomas-form'); // Formulario.
let select = document.getElementById('sintomas'); // Select.
let lista_de_sintomas = document.getElementById('sintomas-list'); // Lista dos sintomas selecionados .
let nome_da_classe = document.getElementById('nome-da-classe'); // Nome da classificao das doencas.
let lista_de_doencas = document.getElementById('lista-de-doencas'); // Lista das doencas que serao exibidas.
let button_remover_sintomas_selecionados = document.getElementById("btn-remover-sintomas-selecionados"); // Botao para remover apenas os sintomas selecionados.
let button_limpar_tudo = document.getElementById("btn-limpar-tudo"); // Botao para remover todos os sintomas selecionados.
let button_fechar_janela_infos = document.getElementById('btn-fechar-janela');

let sintomas_selecionados = []; // Lista dos sintomas selecionados no select.
const classes = Object.keys(doencas_lista); // Chaveamento das doencas e suas classes.

// Aguarda o DOM carregar completamente.
document.addEventListener("DOMContentLoaded", () => {

    // Itera sobre cada chave e valor de sintomas_lista.
    // Populando o select.
    Object.entries(sintomas_lista).forEach(([chave, valor]) => {
        const option = document.createElement('option');
        option.textContent = valor || chave;
        option.value = chave;
        select.appendChild(option);
    });

    // Adicionar sintomas à lista de sintomas selecionados e exibi-los.
    select.addEventListener("change", () => {
        // Captura o sintoma selecionado.
        const selected_value = select.value;

        // Adicionar o sintoma ao array.
        sintomas_selecionados.push(selected_value);

        // Criar um item da lista.
        const item = document.createElement('li');

        // Criar um checkbox.
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox-${selected_value}`; // Para identificação única.
        checkbox.value = selected_value; // Valor para identificação ao remover.

        // Criar um label para o checkbox.
        const label = document.createElement('label');
        label.htmlFor = checkbox.id; // Associar o label ao checkbox.
        label.textContent = sintomas_lista[selected_value]; // Adicionando o nome da doenca traduzida.

        // Adicionar checkbox e label ao item da lista.
        item.appendChild(checkbox);
        item.appendChild(label);

        // Adicionar o item à lista.
        lista_de_sintomas.appendChild(item);

        // Remover a opção selecionada do select tornando ela desabilitada.
        select.querySelector(`option[value="${selected_value}"]`).disabled = true;

        // Habilitar o título padrão do select novamente.
        const tituloOption = select.querySelector('option[disabled]');
        select.value = tituloOption.value;
    });

    // Removendo apenas os sintomas selecionados.
    button_remover_sintomas_selecionados.addEventListener('click', () => {
        // Verifica se existem sintomas selecionados.
        if (sintomas_selecionados.length == 0) {
            alert("Não existem sintomas para remover!");
        } else {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    // Remover o item da lista.
                    checkbox.parentElement.remove();

                    // Habilitar a opção correspondente no select.
                    const value = checkbox.value;
                    select.querySelector(`option[value="${value}"]`).disabled = false;

                    // Obter o índice do sintoma selecionado.
                    const index = sintomas_selecionados.indexOf(value);
                    if (index !== -1) {
                        // Remover o sintoma do array de sintomas selecionados.
                        sintomas_selecionados.splice(index, 1);
                    }
                }
            });


        }
    })

    // Limpando toda a lista de sintomas selecionados.
    button_limpar_tudo.addEventListener('click', () => {
        // Verificando se existem sintomas selecionados.
        if (sintomas_selecionados.length == 0) {
            alert("Não existem sintomas para remover");
        } else {
            // Seleciona todos os checkboxes.
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');

            // Remove um por um.
            checkboxes.forEach(checkbox => {
                // Remover o item da lista.
                checkbox.parentElement.remove();

                // Habilitar a opção correspondente no select.
                const value = checkbox.value;
                select.querySelector(`option[value="${value}"]`).disabled = false;

                // Limpar o array de sintomas.
                sintomas_selecionados = [];
            });
        }
    });

    // Executa a requisicao na API para a RNA MLP.
    formulario.addEventListener('submit', (e) => {
        // Previne que o formulário reset.
        e.preventDefault();

        // Obtém os sintomas informados pelo usuário e os transforma em uma lista.
        const sintomas = Array.from(sintomas_selecionados);

        // Monta a solicitação JSON com os sintomas.
        const requestData = { sintomas: sintomas };

        // Verifica se o minimo de sintomas foram informados.
        if (sintomas.length < 5) {
            alert("Selecione pelo menos 5 sintomas!");
        } else {
            // Faz a requisição POST para a API Flask.
            fetch('http://127.0.0.1:5000/diagnostico', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            })
                .then(response => response.json())
                .then(data => {
                    // Exibindo o resultado do diagnóstico no div de resultado.

                    // Extraindo o numero da classe informada pela API.
                    const classeString = data.diagnostico;
                    const index_doenca = classeString.split(" ")[1];

                    // Extraindo o nome da classe no dicionario de doencas.
                    const classe = classes[index_doenca - 1];

                    // Atrbuindo o nome da classe na interface.
                    nome_da_classe.innerHTML = classe;

                    // Extraindo as doencas da sua respectiva classe no dicionario de doencas.
                    const doencas = doencas_lista[classe];
                    
                    lista_de_doencas.innerHTML = '';

                    // Cria um item de lista para cada doenca.
                    doencas.forEach(doenca => {
                        const item = document.createElement('li');
                        item.textContent = doenca

                        // Adicionando um evento de clique ao item.
                        item.addEventListener('click', () => {
                            // Função que exibirá as informações.
                            exibirInformacaoDoenca(doenca);
                        });

                        lista_de_doencas.appendChild(item);
                    });

                    // Função para exibir informações sobre a doença.
                    function exibirInformacaoDoenca(doenca) {
                        let area_informacao_doenca = document.getElementById('informacao-doenca');
                        let informacoes_doenca = document.getElementById('info-doenca');
                        let precaucoes_doenca = document.getElementById('precaucao-doenca');

                        // Obtém as informações e precauções da doença.
                        informacoes_doenca.innerHTML = descriptions_dict[doenca] || 'Informações não disponíveis.';
                        precaucoes_doenca.innerHTML = precautions_dict[doenca] || 'Precauções não disponíveis.';

                        area_informacao_doenca.style.display = 'block'; // Exibe a div de informações.
                    }

                    button_fechar_janela_infos.addEventListener('click', () => {
                        let area_informacao_doenca = document.getElementById('informacao-doenca');
                        area_informacao_doenca.style.display = 'none';
                    });
                })
                .catch(error => {
                    console.error('Erro:', error);
                    nome_da_classe.innerHTML = 'Erro ao realizar o diagnóstico. Tente novamente.';
                });
        }
    });
});