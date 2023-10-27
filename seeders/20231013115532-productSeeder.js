"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        id: 1,
        productName: "Javascript",
        productDescription:
          "JavaScript es un lenguaje de programación de alto nivel, interpretado por el navegador web del cliente. Es un lenguaje de scripting orientado a objetos con una sintaxis similar a C. Permite a los desarrolladores controlar y manipular elementos del Document Object Model (DOM) de una página web, gestionar eventos, realizar solicitudes HTTP asíncronas y crear aplicaciones web interactivas y ricas en contenido. También es ampliamente utilizado en el desarrollo de aplicaciones de servidor a través de plataformas como Node.js. Además, JavaScript es esencial en el desarrollo web moderno, ya que desempeña un papel crucial en la creación de experiencias de usuario atractivas y dinámicas.",
        productImage: "https://www.wikisaber.es/wp-content/uploads/2019/06/Marketing-de-productos.jpg",
        productCategoryId: 1,
        productStock: 55,
        productPrice: 15.00,
        productStatus: 1,
        productRating: 4.00,
        productDiscount: 30.00,
        productFeatured: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        productName: "REACT",
        productDescription: "React es una biblioteca de JavaScript de código abierto utilizada para construir interfaces de usuario eficientes y dinámicas en aplicaciones web. Se basa en un modelo de componentes reutilizables que permiten el desarrollo de aplicaciones escalables y fáciles de mantener. React utiliza el concepto de Virtual DOM para minimizar las actualizaciones del navegador, lo que resulta en un rendimiento óptimo de la aplicación. Además, React se puede combinar con otras bibliotecas y marcos de trabajo para desarrollar aplicaciones completas de una sola página (SPA) o aplicaciones móviles nativas a través de React Native. La biblioteca ha ganado popularidad en la comunidad de desarrollo web debido a su flexibilidad, rendimiento y la comunidad activa que la respalda",
        productImage: "https://www.wikisaber.es/wp-content/uploads/2019/06/Marketing-de-productos.jpg",
        productCategoryId: 1,
        productStock: 43,
        productPrice: 10.00,
        productStatus: 1,
        productRating: 4.30,
        productDiscount: 25.00,
        productFeatured: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        productName: "Node.js",
        productDescription:  "Node.js es un entorno de tiempo de ejecución de JavaScript de código abierto que se basa en el motor V8 de Chrome. Permite a los desarrolladores ejecutar código JavaScript en el lado del servidor, lo que lo hace especialmente adecuado para construir aplicaciones web escalables y de alto rendimiento. Node.js utiliza un modelo de E/S sin bloqueo y eventos, lo que lo hace eficiente y adecuado para aplicaciones en tiempo real. Además, cuenta con un ecosistema de paquetes a través de npm, que proporciona una amplia variedad de bibliotecas y módulos para simplificar el desarrollo de aplicaciones. Node.js es ampliamente utilizado en aplicaciones web, servidores, aplicaciones de red, API y más, y ha ganado popularidad debido a su velocidad y eficiencia en el desarrollo de aplicaciones basadas en JavaScript tanto en el lado del cliente como en el lado del servidor.",
        productImage: "https://www.wikisaber.es/wp-content/uploads/2019/06/Marketing-de-productos.jpg",
        productCategoryId: 2,
        productStock: 12,
        productPrice: 12.00,
        productStatus: 1,
        productRating: 3.50,
        productDiscount: 35.00,
        productFeatured: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        id: 4,
        productName: "MySQL",
        productDescription: "MySQL es un sistema de gestión de bases de datos relacionales (RDBMS) de código abierto ampliamente utilizado. Está diseñado para almacenar y administrar datos de manera eficiente y segura, utilizando el lenguaje de consulta estructurado (SQL) para realizar operaciones en la base de datos. MySQL es conocido por su alta velocidad, escalabilidad y capacidad de gestionar grandes cantidades de datos. Proporciona características como la replicación, la alta disponibilidad y la compatibilidad con múltiples plataformas. Se utiliza en una amplia variedad de aplicaciones, desde sitios web y aplicaciones empresariales hasta sistemas de gestión de contenido y mucho más, lo que lo convierte en una opción popular para la administración de datos en diversas industrias.",
        productImage: "https://www.wikisaber.es/wp-content/uploads/2019/06/Marketing-de-productos.jpg",
        productCategoryId: 2,
        productStock: 12,
        productPrice: 32.00,
        productStatus: 1,
        productRating: 4.25,
        productDiscount: 15.00,
        productFeatured: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
