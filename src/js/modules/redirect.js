const redirect = () => {

    let btnPreInscricao = document.querySelector('.btnPreInscricao');
    let btnCursosBilingue = document.querySelector('.btnCursosBilingue');
    let btnImpah = document.querySelector('.btnImpah');
    let btnFacebook = document.querySelector('.btn-facebook');
    let btnTwitter = document.querySelector('.btn-twitter');
    let btnInstagram = document.querySelector('.btn-github');

    let preInscricao = '/pre-inscricao';
    let cursoBilingue = '/cursos_bilingue';

    let facebook = 'https://www.facebook.com/PrefeituradeFortaleza';
    let twitter = 'https://twitter.com/prefeiturapmf';
    let instagram = 'https://www.instagram.com/prefeituradefortaleza/?igshid=oo4pve45zutb';
    let impah = 'https://concursos.fortaleza.ce.gov.br/';


    if(btnPreInscricao){
        btnPreInscricao.addEventListener('click', function(e){
            e.preventDefault();
            window.location.href = preInscricao;
        });
    }

    if(btnFacebook){
        btnFacebook.addEventListener('click', function(e){
            e.preventDefault();
            window.open(facebook, 'blank');
        })
    }

    if(btnTwitter){
        btnTwitter.addEventListener('click', function(e){
            e.preventDefault();
            window.open(twitter, 'blank');
        })
    }

    if(btnInstagram){
        btnInstagram.addEventListener('click', function(e){
            e.preventDefault();
            window.open(instagram, 'blank');
        })
    }

    if(btnImpah){
        btnImpah.addEventListener('click', function(e){
            e.preventDefault();
            window.open(impah, 'blank');
        })
    }

}

export { redirect };