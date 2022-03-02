import React from "react"
import {StyleSheet} from "react-native"

const Links= {JaponesMarianoJun:"https://instagram.fcor10-3.fna.fbcdn.net/v/t51.2885-15/272938831_2974099506233394_7551727198670976105_n.jpg?stp=dst-jpg_e15_fr_p1080x1080&_nc_ht=instagram.fcor10-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=zW5xmWmcpnIAX_Ii4JF&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc2MzU2NjM4Mjc1MjAwMDUzMw%3D%3D.2-ccb7-4&oh=00_AT87iccT4OKJsoHaBiyxp9e1DQ6lyvnDzlwgj-nY_OVfIA&oe=6221AE91&_nc_sid=30a2ef",
InglesEducaIdiomas:"https://instagram.fcor10-3.fna.fbcdn.net/v/t51.2885-15/272130815_995868821360791_2893624827502689731_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.fcor10-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=1G0FZ6mT9QwAX_TNKsx&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc1NDA4Mzk0NzQ3MTI3Mzk4Mg%3D%3D.2-ccb7-4&oh=00_AT9IZgZ3dr1ylr3h8kmvAaVIKEIYV0WeBlVLdf7u64nzGQ&oe=62223BC2&_nc_sid=30a2ef",
RusoOficialA1:"https://instagram.fcor10-3.fna.fbcdn.net/v/t51.2885-15/270071618_448602126717867_407238629084505660_n.jpg?stp=dst-jpg_e35_p750x750_sh0.08&_nc_ht=instagram.fcor10-3.fna.fbcdn.net&_nc_cat=103&_nc_ohc=FPTqVr6StmAAX8fgQPL&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjczODc2MjA1NzgzMzgzODMyNA%3D%3D.2-ccb7-4&oh=00_AT9nZ1rRoqdIln6gH87n9ctDvo2S_KADCE8-THsqVrf_lQ&oe=6222374F&_nc_sid=30a2ef",
RusoGeneral:"https://instagram.fcor10-3.fna.fbcdn.net/v/t51.2885-15/260583552_616738652706358_1284703207579195812_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcor10-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=oEcrA8YVN3sAX8hGIHC&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjcxNDc0MDQ3OTExNzYzMTcyMw%3D%3D.2-ccb7-4&oh=00_AT82dmijwl-Fxi_6sjUMBV9CVTOkdxZNXJ0TqJoI0_BpPg&oe=6222E4BF&_nc_sid=30a2ef"
}

const CoursesList = [
    {value: "Japonés básico", id: Math.random().toString(),Teacher:"Mariano Jun",onlineImage:Links.JaponesMarianoJun,description:"Esta es una descripción genérica que luego será específica",price:"$3000"},
    {value: "Ruso básico", id: Math.random().toString(),Teacher:"Tamara",onlineImage:Links.RusoOficialA1,description:"Esta es una descripción genérica que luego será específica",price:"$2000"},
    {value: "Ruso preintermedio", id: Math.random().toString(),Teacher:"Tamara",onlineImage:Links.RusoGeneral,description:"Esta es una descripción genérica que luego será específica",price:"$3000"},
    {value: "Inglés A1", id: Math.random().toString(),Teacher:"Lucía Pérez",onlineImage:Links.InglesEducaIdiomas,description:"Esta es una descripción genérica que luego será específica",price:"$3500"}, 
    {value: "Inglés avanzado", id: Math.random().toString(),Teacher:"Andrea Pascual",onlineImage:Links.InglesEducaIdiomas,description:"Esta es una descripción genérica que luego será específica",price:"$3700"}, 
    {value: "Japonés N5", id: Math.random().toString(),Teacher:"Mariano Jun",onlineImage:Links.JaponesMarianoJun,description:"Esta es una descripción genérica que luego será específica",price:"$2500"},
    {value: "Japonés N4", id: Math.random().toString(),Teacher:"Mariano Jun",onlineImage:Links.JaponesMarianoJun,description:"Esta es una descripción genérica que luego será específica",price:"$3200"}
]

const styles = StyleSheet.create({})

export default CoursesList