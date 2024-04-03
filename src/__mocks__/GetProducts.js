const products = [

    {
        "id": 2521,
        "ref": "F5A5000",
        "price_in": "282000",
        "price_out": "394842",
        "size": "",
        "name": "BALON FÚTBOL",
        "features": "BALON FUTBOL NEW VANTAG ACENTEC 5",
        "brand": "Molten",
        "id_category": 1
    },
    {
        "id": 2523,
        "ref": "PF-552",
        "price_in": "65093",
        "price_out": "92000",
        "size": "",
        "name": "BALON FÚTBOL",
        "features": "BALÓN FÚTBOL PF-552 3",
        "brand": "Molten",
        "id_category": 1
    },
    {
        "id": 2524,
        "ref": "B5G3200",
        "price_in": "147917",
        "price_out": "165000",
        "size": "12",
        "name": "BALON BALONCESTO",
        "features": "BALON DE BALONCESTO 12 PANEL B6G3000",
        "brand": "Molten",
        "id_category": 1
    },
    {
        "id": 2525,
        "ref": "B7F1601-KP",
        "price_in": "57120",
        "price_out": "80000",
        "size": "8",
        "name": "BALON BALONCESTO",
        "features": "BALON BALONCESTO 8 PAN B7F1601 NEGRO/ROSADO",
        "brand": "Molten",
        "id_category": 1
    },
    {
        "id": 2526,
        "ref": "V5M2200",
        "price_in": "85680",
        "price_out": "120000",
        "size": "",
        "name": "BALON VOLEIBOL",
        "features": "BALON VOLEIBOL MOLTEN EVA V5M2200",
        "brand": "Molten",
        "id_category": 1
    },
    {
        "id": 2527,
        "ref": "V5B2500-YB",
        "price_in": "97937",
        "price_out": "138000",
        "size": "",
        "name": "BALON VOLEYPLAYA",
        "features": "BALON VOLEYPLAYA COSIDO V5B2500 AMARILLO/AZUL",
        "brand": "Molten",
        "id_category": 1
    },
    {
        "id": 2528,
        "ref": "84-5001",
        "price_in": "21600",
        "price_out": "30000",
        "size": "S/XL",
        "name": "CAMISETA DEPORTIVA KML",
        "features": "CAMISETA DEPORTIVA KML HOMBRE TALLAS S-XL",
        "brand": "Kamila",
        "id_category": 2
    },
    {
        "id": 2529,
        "ref": "98-1036",
        "price_in": "37800",
        "price_out": "50000",
        "size": "S/M",
        "name": "CONJUNTO DEPORTIVO",
        "features": "CONJUNTO DEPORTIVO MANGA SIZA",
        "brand": "Kamila",
        "id_category": 2
    },
    {
        "id": 2530,
        "ref": "98-1078",
        "price_in": "34300",
        "price_out": "50000",
        "size": "ÚNICA",
        "name": "CONJUNTO DEPORTIVO",
        "features": "CONJUNTO DEPORTIVO KAMILA TOP U",
        "brand": "Kamila",
        "id_category": 2
    },
    {
        "id": 2531,
        "ref": "98-151",
        "price_in": "17900",
        "price_out": "30000",
        "size": "M",
        "name": "BICICLETERO DEPORTIVO",
        "features": "SHORT SUPER BIKER KAMILA",
        "brand": "Kamila",
        "id_category": 2
    },
    {
        "id": 2533,
        "ref": "REF_4",
        "price_in": "10,000",
        "price_out": "15,000",
        "size": "S/M",
        "name": "BALON FUTBOL PROFESIONAL",
        "features": "features DE BALON PRUEBA",
        "brand": "MOLTEN",
        "id_category": 1
    },
    {
        "id": 2535,
        "ref": "REF_5",
        "price_in": "10,000",
        "price_out": "15,000",
        "size": "S/M",
        "name": "BALON FUTBOL PROFESIONAL",
        "features": "features DE BALON PRUEBA",
        "brand": "MOLTEN",
        "id_category": 1
    },
]

 async function getProducts(){
    let response = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }
            , 500)
    })
    console.log(response);
    return response;
}

export default getProducts;