const data = {
    "empresa": "Viação Rápida",
    "linhas": [
        {
            "id": 1,
            "nome": "Expresso Centro",
            "horarios": [
                {"saida": "06:00", "chegada": "06:30"},
                {"saida": "07:00", "chegada": "07:30"}
            ],
            "paradas": [
                {"id": 101, "nome": "Terminal Central", "latitude": -9.6658, "longitude": -35.7359, "ordem": 1},
                {"id": 102, "nome": "Praça da Faculdade", "latitude": -9.6675, "longitude": -35.7310, "ordem": 2},
                {"id": 103, "nome": "Estação Rodoviária", "latitude": -9.6692, "longitude": -35.7270, "ordem": 3},
                {"id": 104, "nome": "Avenida Principal", "latitude": -9.6710, "longitude": -35.7225, "ordem": 4}
            ]
        },
        {
            "id": 2,
            "nome": "Circular Praias",
            "horarios": [
                {"saida": "08:00", "chegada": "08:45"},
                {"saida": "09:00", "chegada": "09:45"}
            ],
            "paradas": [
                {"id": 201, "nome": "Terminal Jatiúca", "latitude": -9.6495, "longitude": -35.7081, "ordem": 1},
                {"id": 202, "nome": "Parque Shopping", "latitude": -9.6506, "longitude": -35.7024, "ordem": 2},
                {"id": 203, "nome": "Praia da Pajuçara", "latitude": -9.6575, "longitude": -35.7089, "ordem": 3},
                {"id": 204, "nome": "Praia de Ponta Verde", "latitude": -9.6612, "longitude": -35.7042, "ordem": 4}
            ]
        }
    ],
    "onibus": [
        {
            "id": "A100",
            "modelo": "Volvo B340M",
            "linha": 1,
            "status": "em operação",
            "motorista": "José da Silva",
            "ano_fabricacao": 2019,
            "placa": "ABC-1234"
        },
        {
            "id": "A101",
            "modelo": "Scania K310",
            "linha": 2,
            "status": "em manutenção",
            "motorista": null,
            "ano_fabricacao": 2018,
            "placa": "DEF-5678"
        },
        {
            "id": "A102",
            "modelo": "Mercedes-Benz O500U",
            "linha": 1,
            "status": "em operação",
            "motorista": "Maria Oliveira",
            "ano_fabricacao": 2020,
            "placa": "GHI-9012"
        }
    ]
}
//-----------------------------Demônio M fez atv01----------------------------------
function olharHoras() {
    const horariosLinhas = []
    data.linhas.forEach(linha => {
        horariosLinhas.push({
            id: linha.id,
            nome: linha.nome,
            horarios: linha.horarios
        })
    })
    return horariosLinhas
}
const horariosLinhas = olharHoras()
console.log(horariosLinhas)
//-----------------------Demônio M fez atv02------------------------------------------
function verificarDisponivel() {
    const LinhaDisponivel = []
    data.linhas.forEach(linha => {
        const onibusLinha = data.onibus.filter(o => o.linha === linha.id && o.status === "em operação")
        LinhaDisponivel.push({
            linhaId: linha.id,
            nome: linha.nome,
            disponibilidade: onibusLinha.length
        })
    })
    return LinhaDisponivel
}

const dispTodasLinhas = verificarDisponivel()
console.log(dispTodasLinhas)

//----------------------DM fez atv 03-----------------------------
function ParadasLinhas() {
    const todasParadas = []
    data.linhas.forEach(linha => {
        todasParadas.push({
            linhaId: linha.id,
            nome: linha.nome,
            paradas: linha.paradas
        })
    })
    return todasParadas
}

const paradasTodasLinhas = ParadasLinhas()
console.log(paradasTodasLinhas)
//-----------------------DM fez atv 04----------------------------
function onibusStatus(status) {
    const onibusFiltro = data.onibus.filter(o => o.status === status)
    return onibusFiltro
}
const onibusOp = onibusStatus("em operação")
console.log(onibusOp) 

const onibusManuel = onibusStatus("em manutenção")
console.log(onibusManuel)

//------------------------DM fez atv 05----------------------------
function onichanInfoId(onibusId) {
    const onibus = data.onibus.find(o => o.id === onibusId)
    return onibus ? onibus : "Ônibus não encontrado."
}


const InfoBus =onichanInfoId("A100")
console.log(InfoBus)

//--------------------------DM fez atv 06
function VerificarMotor(onibusId) {
    const onibus = data.onibus.find(o => o.id === onibusId)
    if (onibus) {
        return onibus.motorista ? "Motorista atribuído." : "Nenhum motorista atribuído."
    } else {
        return "Ônibus não encontrado."
    }
}

const statusMotor = VerificarMotor("A100")
console.log(statusMotor)

//-------------------------DM fez atv 07-----------------------------------------
function listarLinhasDisponiveis() {
    const linhasDisponiveis = data.linhas.map(linha => {
        return {
            id: linha.id,
            nome: linha.nome,
            horarios: linha.horarios
        }
    })
    return linhasDisponiveis
}

const todasLinhas = listarLinhasDisponiveis()
console.log(todasLinhas)
//-----------------------------DM vai fazer atv 08--------------------------------------
//-----------------------------DM vai fazer atv 09--------------------------------------
//-----------------------------DM vai tentar fazer a atv 10 com 50% de falha------------
//------------------------------json------------------------------
console.log(data)