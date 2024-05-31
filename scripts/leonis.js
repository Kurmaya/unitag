const prodArr = document.querySelectorAll('.products-wrapper');
            const tabs = document.querySelectorAll('.tabs > p');
            for(let i =0 ; i<tabs.length; i++){
                tabs[i].addEventListener('click',()=>{
                    let store = tabs[i].innerText.toLowerCase();
                    
                    
                    prodArr.forEach(element => {
                        element.classList.remove('active');
                    });
                    tabs.forEach(tab=>{
                        tab.classList.remove('active');
                    })
                    prodArr[i].classList.add('active');
                    tabs[i].classList.add('active');
                })
            }