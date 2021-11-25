<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 Los procesos de comercialización internacional se desarrollan bajo el enfoque de dos actividades claves: la importación y la exportación. La exportación consiste en la salida de mercancías del territorio nacional hacia el exterior, cumpliendo con los requisitos de entrada en el país importador y respetando el término de negociación pactado con el cliente para asumir las responsabilidades y costos hasta el punto o lugar convenido.   
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/oSkOAeiInBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        
   
    
    p.mb-5 Un país se encuentra en superavitario cuando la cantidad exportada es mayor que la importada y está en déficit, cuando importa más de lo que exporta. Por ejemplo, la balanza comercial colombiana en el periodo comprendido entre enero-mayo del 2021, registró un déficit de US$5.397,4 millones FOB, la cual aumentó respecto a los resultados arrojados en el mismo periodo, pero en el año 2020, año en el cual se presentó un déficit de US$4.033,5 millones FOB. (DANE, 2021).

  

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
