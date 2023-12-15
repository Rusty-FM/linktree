const bgIcon = document.querySelectorAll('.linkTree i');
bgIcon[0].style.background = '#0866FF';
bgIcon[1].style.background = 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)';
bgIcon[2].style.background = '#25D366';
bgIcon[3].style.background = '#000';
bgIcon[4].style.background = '#0866FF';



const toggle = document.querySelector('.logo');
            let tema = localStorage.getItem('tema');


            if (!tema) {
                localStorage.setItem('tema', 'bg1');
            }

            const bg1 = () => {
                document.body.classList.add('body');
                localStorage.setItem('tema', 'bg2');
            }
            
            const bg1Mode = () => {
                document.body.classList.toggle('bgLogo');
                localStorage.setItem('tema', 'bg1');
            }

            if(tema === 'bg2') {
                bg1();
            }


            toggle.addEventListener('click', function (e) {
                tema = localStorage.getItem('tema');
                if (tema === 'bg1') {
                    bg1();
                } else {
                    bg1Mode();
                }
                e.preventDefault();
            })


