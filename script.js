// script.js

function pedido(produto){

  const numero = "5585999999999";

  const mensagem =
    `Olá, quero pedir: ${produto}`;

  const url =
    `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}