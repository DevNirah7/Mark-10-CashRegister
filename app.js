var billAmount=document.querySelector(".input-bill-amt");
var amountPaid=document.querySelector(".input-amt-paid");
var checkButton=document.querySelector(".chk-btn");
var nextButton=document.querySelector(".nxt-btn");
var amountDiv=document.querySelector(".amt-div");
var errorMessage=document.querySelector(".error-msg");
var noOfNotes=document.querySelectorAll(".no-of-notes")

var notes= [2000,500,100,20,10,5,1];


nextButton.addEventListener("click", function validate()
{
    hideMsg();
    if(billAmount.value > 0)
    { 
       if(Number(amountPaid.value) >= Number(billAmount.value))
       {
       var amountToBeReturned= amountPaid.value - billAmount.value;
       console.log(amountToBeReturned);
       calculateChange(amountToBeReturned);
       }
       else
       {
       showMsg("Cash amount should atleast be equal to the bill amount!")
       }
    }
    else
    {
     showMsg("Amount should be greater than zero!");    
    }
}
);


    function calculateChange(amountToBeReturned)
    { 
     for(let i=0; i<notes.length;i++)
     {
         var numOfNotes= Math.trunc(amountToBeReturned / notes[i]);
         amountToBeReturned= amountToBeReturned % notes[i];
         noOfNotes[i].innerText= numOfNotes;

     }   

    };


    function hideMsg()
    {
        errorMessage.style.display="none";
    };

    function showMsg(message)
    {
        errorMessage.style.display="block";
        errorMessage.innerText=message;
    };
