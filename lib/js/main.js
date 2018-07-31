
const titleInput = document.getElementById( "title_input" );
const mainTitle = document.getElementById( "main_title" );
const ourButton = document.getElementById( "submit_button" );
const form = document.getElementsByClassName( "form_container" )[0];
const storyP = document.getElementById( "story_result" );

/* update title as input field is updated */
function updateTitle( e )
{
    if ( e.key === "Backspace" )
    {
        if ( mainTitle.innerText ) //if there is text in the input right now
        {
            mainTitle.innerText = mainTitle.innerText.substring( 0, 
                                        mainTitle.innerText.length - 1 );
        }
    }
    else if ( /^[a-zA-Z0-9]$/.test( e.key ) ) //if key down is a char key
    {
        //  mainTitle.innerText = titleInput.value;
        mainTitle.innerText += e.key;
    }
}

/* button behavior when clicked */
function buttonListener()
{
    event.preventDefault(); //do not reload

    //get all fields
    const myAdLib = document.getElementById( "title_input" ).value;
    const noun = document.getElementById( "noun" ).value;
    const verb = document.getElementById( "verb" ).value;
    const adjective = document.getElementById( "adjective" ).value;

    //if the user has any field left blank
    if ( !myAdLib || !noun || !verb || !adjective )
    {
        alert( "Please fill in all fields" );
        return;
    }

    //otherwise parse fields
    const story = `Last night I ate a ${noun}, and today I just had to ${verb}. What a ${adjective} day!`;
    form.style.display = "none"; //hide form container
    storyP.innerText = story;
}

titleInput.onkeydown = updateTitle; //has to be onkeydown to handle backspace
ourButton.addEventListener( "click", buttonListener );