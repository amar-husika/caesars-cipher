function rot13(str) {
  
    return str
      .split("")
      .map(c => {
        if( c.match(/[a-zA-Z]/) )  {
          return String.fromCharCode((c.charCodeAt(0)-65+13)%26+65);
        } else return c;
      })
      .join("");
  }

rot13("SERR PBQR PNZC");