import Usuarios from "../models/Usuario.js"

const usuarios = [
  new Usuarios({
    nome: "Walter",
    email: "walter@alurageek.com",
    senha: "$2b$12$pSNF4Hqm0QhR2ZWads9/o.dQ18ljdX7NPztImUIHkIOkYJ1TSwsfy",
  }),
  new Usuarios({
    nome: "Alan",
    email: "alan@alurageek.com",
    senha: "$2b$12$HlvoVX0s0saa3EuMvO/Mu..4nihoalr5MH0MBDhSs2DrUEegqSGhy",
  }),
  new Usuarios({
    nome: "Pedro",
    email: "pedro@alurageek.com",
    senha: "$2b$12$jIb5vjMVRFVDxIXznKJ79OBQSqqjfQfbwCVzA1zi0MBMwhkli5eIq",
  }),
];

export default usuarios