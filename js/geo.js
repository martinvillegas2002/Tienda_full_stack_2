// ===============================
// geo.js
// Arreglos de regiones y comunas para poblar selects dependientes en admin
// Puedes ampliar esta lista según sea necesario.
// ===============================


const REGIONES = [
{ codigo: 'RM', nombre: 'Región Metropolitana' },
{ codigo: 'V', nombre: 'Región de Valparaíso' },
{ codigo: 'VIII', nombre: 'Región del Biobío' }
];


const COMUNAS = {
'RM': ['Santiago', 'Providencia', 'Ñuñoa', 'Las Condes', 'Maipú'],
'V': ['Valparaíso', 'Viña del Mar', 'Quilpué', 'Villa Alemana'],
'VIII': ['Concepción', 'Talcahuano', 'Chiguayante']
};