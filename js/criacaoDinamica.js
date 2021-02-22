

function criaElemento(catg,linq,imag,alt,subTxt,text){
    const insert = document.querySelector(catg);
    const novoElementoIndex=
                        `
                            <div class='thumb col-xs-12 col-sm-4 col-md-4 col-lg-4'>
                                <figure class= "thumbnail">
                                <a href=${linq} target="_blank" ><img src=${imag} alt=${alt}></a>
                                <figcaption class='caption'>
                                  <h3>${subTxt}</h3>
                                  <p>
                                    ${text}
                                  </p>
                                </figcaption>
                              </figure>
                            </div>

                        `
                     insert.insertAdjacentHTML("beforeend", novoElementoIndex);


}
