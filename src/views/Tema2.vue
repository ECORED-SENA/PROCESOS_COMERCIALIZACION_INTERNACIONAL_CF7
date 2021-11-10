<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Proceso de exportación de servicios

    figure.mb-5
      img(src='@/assets/tema2/img-1.svg')

    p.mb-0  Los servicios, a diferencia de los bienes, son actividades, acciones y procedimientos que aun sin verse o tocarse, pueden ser objeto de una transacción y satisfacen las necesidades, gustos o requerimientos de los clientes.
    p.mb-5 Colombia, en el periodo comprendido entre enero y marzo del 2021, registró sus mayores montos de exportación de servicios en las actividades relacionadas con servicios empresariales, viajes y transporte como se muestra en la tabla 2 a continuación: 
    .row
      .col-8
        p.r-n <b> Tabla 2. </b> Exportación de servicios, según agrupaciones CABPS I Trimestre (2021/2020)p
      .col-4.align-self-center
        p.text-bold.text-center Millones de dólares
    .tabla-a.color-secundario.mb-5 
      table
        caption Nota. DANE-MTCES 
          p.mb-0 P: Cita  profesional 
          p 2:Nota: Para el primer trimestre del 2021 no se presenta información para la agrupación de construcción por reserva estadística.

        thead
          tr
            th.t60 Agrupaciones
            th.t10 2020
            th.t10 2021
            th.t20 Valoración Anual %
           
        tbody.t-center
          tr
            td Otros servicios empresariales
            td.text-center 377,2
            td.text-center  439,0
            td.text-center  16,4
            
          tr
            td Servicios de viaje
            td.text-center  1.165,9
            td.text-center  370,3
            td.text-center  -68,2
           
          tr
            td Servicios de transporte
            td.text-center  d 375,5
            td.text-center  184,4
            td.text-center  -50,9

          tr
            td Servicios de telecomunicaciones, informática e información
            td.text-center  104,1
            td.text-center  101,2
            td.text-center  -2,8            
          
          tr
            td Cargos por el uso de propiedad intelectual
            td.text-center  26,3
            td.text-center  27,1
            td.text-center  3,0

          tr
            td Servicios personales, culturales y de esparcimiento
            td.text-center 28,6
            td.text-center 19,0
            td.text-center -33,7

          tr
            td Servicios de mantenimiento y reparación
            td.text-center 8,4
            td.text-center 3,7
            td.text-center -55,5


          tr
            td Servicios de manufacturas en insumos físicos que son propiedad de otros
            td.text-center 1,5
            td.text-center 2,5
            td.text-center 61,4
            
    p  En este orden de ideas, es importante hacer énfasis en el sector con mayor cantidad de servicios exportados, los servicios empresariales, los cuales contemplan las siguientes actividades
    .row.fnd-6.p-5.mb-5              
      .col-lg-7.mb-4.order-2.order-lg-1          
        ul.lista-ul--separador
          li 
            i.fas.fa-circle.txt
            | Servicios de <em>call centers</em>.
          li
            i.fas.fa-circle.txt
            | Servicios contables..
          li 
            i.fas.fa-circle.txt
            | De auditoría de teneduría de libros y asesoramiento tributario.. 
          li 
            i.fas.fa-circle.txt
            | Servicios de consultoría empresarial en administración de empresas y relaciones públicas.
          li 
            i.fas.fa-circle.txt
            | Servicios jurídicos, investigación y desarrollo I+D.  
          li 
            i.fas.fa-circle.txt
            | Servicios de publicidad estudios de mercado y encuestas de opinión pública. 
          li 
            i.fas.fa-circle.txt
            | Servicios arquitectónicos ingeniería y otros servicios técnicos. 

      .col-lg-5.align-self-end.order-1.order-lg-2 
        figure
          img.img-300.mb-lg-0.mb-md-5(src='@/assets/tema2/img-2.svg')

    .cajon.color-primario.fnd-2.p-4.mb-4
      p.text-center El año 2021 se presenta como uno de los sectores con mayor potencial de crecimiento de la región.

    separador      

    #t_2_1.titulo-segundo
      h2 2.1 Oferta exportable colombiana de servicios 

    p.mb-3 La oferta colombiana de servicios se ha consolidado a través de los años, gracias a las tendencias del mercado y los múltiples acuerdos y tratados comerciales que permiten a los países participantes tener beneficios en las negociaciones internacionales de bienes y servicios.
    p.mb-5 A continuación se conocerá cuál es la oferta exportable de servicios.

    .row.justify-content-around.align-items-center
      .col-lg-8
        .row.mb-5
          LineaTiempoD.color-acento-contenido
            p.text-small(numero="1" titulo="Animación digital y videojuegos ") Oportunidades de exportación de servicios de animación digital y videojuegos a través del diseño de contenidos interactivos para redes sociales y producción de películas animadas. <br> <br><img class="img-300" src="@/assets/tema2/img-4.svg">

            p.text-small(numero="2" titulo="Aplicaciones móviles ") Oportunidades para diseñar y desarrollar aplicaciones móviles concentrados en el mercado corporativo y las plataformas de comunicación móvil por medio de mensajes de texto (SMS). <br> <br><img class="img-300" src="@/assets/tema2/img-5.svg">
            
            p.text-small(numero="3" titulo="Audiovisual ") Oportunidades para exportar servicios de producción y postproducción de contenidos audiovisuales para cine y televisión basado en la alta calidad y experiencia del talento colombiano.  <br> <br><img class="img-300" src="@/assets/tema2/img-3.svg">

            p.text-small(numero="4" titulo="BPO (Business Process Outsourcing)") Gracias a la infraestructura telemática del país, se pueden encontrar oportunidades en la exportación de servicios de ventas, atención al cliente, comercio electrónico, soporte técnico y demás actividades de <em>back office.</em> <br> <br><img class="img-300" src="@/assets/tema2/img-6.svg">

            p.text-small(numero="5" titulo="<em>Software</em>") Oportunidades para el desarrollo y comercialización de aplicaciones y programas informáticos que atiendan el mercado corporativo y de consumo masivo de <em>software</em> creado a la medida.  <br> <br><img class="img-300" src="@/assets/tema2/img-7.svg">        

            p.text-small(numero="6" titulo="Comunicación gráfica y Editorial ") Las oportunidades de exportación del sector editorial contemplan la producción de libros infantiles, técnicos y de referencia escolar. Por su parte, el sector de la comunicación gráfica comprende servicios de impresión publicitaria, comercial, empaques y editorial.  <br> <br><img class="img-300" src="@/assets/tema2/img-8.svg">

            p.text-small(numero="7" titulo="Servicios de ingeniería ") Las oportunidades de exportación de servicios de Ingeniería se concentran en actividades de asesoría, diseño, arquitectura, interventoría o inspección técnica de obra, además de la estructuración, gerencia, montaje y operación de los proyectos. <br> <br><img class="img-300" src="@/assets/tema2/img-9.svg">
            
            p.text-small(numero="8" titulo="Salud ") El talento médico y científico en Colombia permite ofrecer servicios de salud de alta calidad en especialidades como Cardiología, tratamientos de Cáncer, Oftalmología, Ortopedia, Medicina Estética y Odontología. <br> <br><img class="img-300" src="@/assets/tema2/img-10.svg">





    separador           

    #t_2_2.titulo-segundo
      h2 2.2	Modos de suministro de servicios

    p.mb-3 En el proceso de exportación de servicios, uno de los aspectos más importantes es definir el modo de suministrar el servicio negociado. A continuación, se conocerán los modos de suministro de servicios (PROCOLOMBIA, 2018):



    .row.justify-content-around.align-items-center
      .col-lg-10

        .row.mb-5
          .col-lg-3      
            figure
              img.img-190.mb-md-3.mb-lg-0(src='@/assets/tema2/img-11.svg')
          .col-lg-9.px-2.fnd-1.align-self-end
            p.text-bold MODO 1 – SUMINISTRO TRANSFRONTERIZO
            p.mb-0 El servicio cruza la frontera, desde el país del exportador al país del importador, sin que ninguno de los dos se mueva de su territorio. Ejemplo: <em>Call Centers</em>, donde el servicio atraviesa las fronteras colombianas, pero tanto el proveedor como el consumidor se mantienen en su lugar de residencia.

        .row.mb-5
          .col-lg-3      
            figure
              img.img-190.mb-md-3.mb-lg-0(src='@/assets/tema2/img-12.svg')
          .col-lg-9.px-2.fnd-1.align-self-end
            p.text-bold MODO 2 – CONSUMO EN EL EXTRANJERO
            p El importador se desplaza a consumir el servicio en el territorio del país exportador. Ejemplo: Turismo médico: cuando un no residente se desplaza a Colombia para realizarse un procedimiento quirúrgico.
      
        .row.mb-5
          .col-lg-3      
            figure
              img.img-190.mb-md-3.mb-lg-0(src='@/assets/tema2/img-13.svg')
          .col-lg-9.px-2.fnd-1.align-self-end
            p.text-bold MODO 3 – PRESENCIA COMERCIAL 
            p El exportador de servicios realiza una inversión mediante el establecimiento de una presencia comercial en el territorio del país importador. Ejemplo: un banco colombiano abre una sucursal en Panamá.


        .row.mb-5
          .col-lg-3      
            figure
              img.img-190.mb-md-3.mb-lg-0(src='@/assets/tema2/img-14.svg')
          .col-lg-9.px-2.fnd-1.align-self-end
            p.text-bold MODO 4 – PRESENCIA DE PERSONAS FÍSICAS
            p Personas naturales residentes en el país exportador viajan temporalmente al país importador para prestar sus servicios. Ejemplo: Consultorías: un consultor colombiano se desplaza a otro país a prestar sus servicios.

    separador

    #t_2_3.titulo-segundo
      h2 2.3  Pasos para exportar servicios 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
    .row.justify-content-around.align-items-center
      .col-lg-10


        .row.mb-5
          .row.fnd-7
            p.text-center.text-white Se debe tener en cuenta que entre los regímenes especiales se encuentran: 
          .row.justify-content-around.align-items-center.degra
            .col-lg-10
              .row.justify-content-around.align-items-center.my-4
                .col-lg-6.align-items-center.img-c.px-5
                  figure
                      img.mb-3.img-190(src='@/assets/tema2/img-15.svg')
                  h3.text-center PLAN VALLEJO DE SERVICIOS
                  ul.lista-ul
                    li 
                      i.fas.fa-circle.txt
                      | Establece la importación de bienes de capital con suspensión del arancel y diferimiento del pago de IVA para prestar servicios que se exportan.
                    li 
                      i.fas.fa-circle.txt
                      | Los bienes de capital importados deben usarse para la exportación de servicios.
                    li 
                      i.fas.fa-circle.txt
                      | Para obtener este beneficio, las empresas deben solicitar autorización a la DIAN antes de realizar la importación.                                 
                .col-lg-6.align-items-center.img-c.px-5
                  figure
                      img.mb-3.img-190(src='@/assets/tema2/img-16.svg')
                  h3.text-center ZONAS FRANCAS DE SERVICIOS
                  ul.lista-ul
                    li 
                      i.fas.fa-circle.txt
                      | Aplicación de una tarifa especial del 15 % del impuesto sobre la renta para los usuarios industriales de bienes y/o servicios y para el usuario operador.
                    li 
                      i.fas.fa-circle.txt
                      | Tarifa del 9 % del Impuesto a la renta para la equidad (CREE) para las Zonas Francas y los usuarios industriales de bienes y/o servicios que obtuvieron su calificación después del 31 de diciembre de 2012.
      
    separador

    #t_2_4.titulo-segundo
      h2 2.4	Acuerdos de doble tributación 

    .row.fnd-1.py-4
      .col-lg-8.align-self-end.px-5
        p Son acuerdos internacionales suscritos por diferentes países que buscan evitar que a sus residentes se les imponga varios gravámenes tributarios por un mismo hecho.
        p Estos pueden ser multilaterales o bilaterales y pueden recaer sobre reglas de interpretación, estipulaciones normativas, entre otros acuerdos respecto de distintos impuestos que generalmente se realizan sobre el impuesto sobre la renta y el patrimonio. Dichos acuerdos pueden hacerse de manera parcial, lo que quiere decir que cubre determinados sectores económicos y no a la población en su totalidad, para estimular dichos mercados de manera específica. (Ekomercio, 2021)

      .col-lg-4
        figure
          img.mb-3.img-190(src='@/assets/tema2/img-17.svg')







</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
