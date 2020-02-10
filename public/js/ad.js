$('#add-image').click(function () {
    // Je récupère le numéro des futurs champs que je vais créer
    const index = $('#ad-images').val();

    console.log(index);

    // Je recupère le prototype des entrées
    // Je n'arriva pas a changer le name avec .remplace à voir plus tard
    const tmpl = $('#ad_images').data('prototype').replace(/__name__/g, index);

    console.log(tmpl);

    $('#ad-image').append(tmpl);
    // Je gère le button supprimer
    handleDeleteButtons();
});

// function pour effacer les images du formulaires
function handleDeleteButtons() {
    $('button[data-action="delete"]'.click(function(){
        const targer = $this.dataset.target;
        $(target).remove();
    }))
}

function updateCounter() {
    const count = $('#ad_image div.form-group').lenght;

    $('#widgets-counter').val(count);
}

updateCounter();
handleDeleteButtons();