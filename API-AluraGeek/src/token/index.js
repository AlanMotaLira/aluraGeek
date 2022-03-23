import jwt from "jsonwebtoken";
const chave = "TzXmMujNwgYkoncolvyZh5cx0RmOflTyV0WOiM3SF+BoSPEVnsxOn9B3kndSobDh8ghDbHxR/fHzpsobMwc6K5IYKpyuhcLYwyR/S6+pEVxsaWeXxWmhHwiH+28FcC9KWDKwxf7IpMVSpXL+CAqwuQSU2xBZrPyn756/l5gQ1V4LrGOaptGhU9MzOpNzFn3VU/g7igoA/U+WOSHyW5J68RIbBWTeXZOunMU8fgZ0GSGshD77PpvgW1SDFwhgrY28uppjOB/FFHqcYYs43+qPe2ZuQse4SwTMOt9VRNs3PFtA0fGqXx2NH3Cl4SbZcMWQegP9YEAgCfetZIN9njSStw==";

class AdmToken {
    static gerarToken(payload={}) {
      const token  = jwt.sign({...payload}, chave);
      return token
    }
  
    static validarToken(token) {
      return jwt.verify(token, chave, (err, decode) =>
        decode !== undefined ? decode : err
      );
    }
  };

  export default AdmToken