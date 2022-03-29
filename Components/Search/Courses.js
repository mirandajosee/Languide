import {StyleSheet} from "react-native"

const Links= {Japones:"http://www.geonames.org/flags/x/jp.gif",
Ingles:"http://www.geonames.org/flags/x/us.gif",
Ruso:"http://www.geonames.org/flags/x/ru.gif",
}

let CoursesList = [
    {language:"Japonés",value: "Japonés básico", id: Math.random().toString(),Teacher:"Mariano Jun",onlineImage:Links.Japones,description:"Curso en modalidad online dictado por profesor nativo con más de 10 años de experiencia. Este curso es ampliamente recomendado para gente sin experiencia en el idioma",price:3000,isFav:true,coordinates:[-37.96438655795547, -57.55496071601729]},
    {language:"Ruso",value: "Ruso básico", id: Math.random().toString(),Teacher:"Tamara",onlineImage:Links.Ruso,description:"Aprende el idioma del espacio y las poesias. Este curso es dictado por una profesora nativa con más de 20 años de experiencia en la enseñanza. Consulta por promos 2x1.",price:2000,isFav:false,coordinates:[-37.96438655795547, -57.55496071601729]},
    {language:"Ruso",value: "Ruso preintermedio", id: Math.random().toString(),Teacher:"Tamara",onlineImage:Links.Ruso,description:"Este curso es ideal para quienes cuenten con el nivel A2 o haber finalizado el curso de A1 nota mayor a 8",price:3000,isFav:false,coordinates:[-34.6135822871305, -58.42576650831185]},
    {language:"Inglés",value: "Inglés A1", id: Math.random().toString(),Teacher:"Lucía Pérez",onlineImage:Links.Ingles,description:"What are you waiting for? Let's start learning English.",price:3500,isFav:false,coordinates:[-31.417162786607104, -64.18739884694234]}, 
    {language:"Inglés",value: "Inglés avanzado", id: Math.random().toString(),Teacher:"Andrea Pascual",onlineImage:Links.Ingles,description:"Este curso requiere tener mínimo un nivel de inglés B2, consultar por exámenes de ubicación.",price:3700,isFav:false,coordinates:[-37.96438655795547, -57.55496071601729]}, 
    {language:"Japonés",value: "Japonés N5", id: Math.random().toString(),Teacher:"Mariano Jun",onlineImage:Links.Japones,description:"Curso en modalidad online dictado por profesor nativo con más de 10 años de experiencia. Este curso es preparativo para un exámen internacional, por lo que es necesario experiencia previa en el idioma y realizar el examen de ubicación",price:2500,isFav:false,coordinates:[-37.96438655795547, -57.55496071601729]},
    {language:"Japonés",value: "Japonés N4", id: Math.random().toString(),Teacher:"Mariano Jun",onlineImage:Links.Japones,description:"Curso en modalidad online dictado por profesor nativo con más de 10 años de experiencia",price:3200,isFav:false,coordinates:[-37.96438655795547, -57.55496071601729]}
]

const styles = StyleSheet.create({})

export default CoursesList