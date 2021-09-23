var billAmount=document.querySelector(".input-bill-amt");
var amountPaid=document.querySelector(".input-amt-paid");
var checkButton=document.querySelector(".chk-btn");
var nextButton=document.querySelector(".nxt-btn");
var amountDiv=document.querySelector(".amt-div");
var changeDiv=document.querySelector(".change-div");
var errorMessage=document.querySelector(".error-msg");
var cashMessage=document.querySelector(".cash-msg");
var noOfNotes=document.querySelectorAll(".no-of-notes")
var remaining=document.querySelector("#change-rtn")

var notes= [2000,500,100,20,10,5,1];

amountDiv.style.display="none";
changeDiv.style.display="none";

nextButton.addEventListener("click", function validate()
{
    hideMsg();
    if(billAmount.value > 0)
    { 
        amountDiv.style.display="block";
    }
    else
    {
     showMsg("Amount should be greater than zero!");    
     amountDiv.style.display="none";
     changeDiv.style.display="none";
    }
}
);

checkButton.addEventListener("click", function validateAmount()
{
    hideMsg();
    if(Number(amountPaid.value) >= Number(billAmount.value))
       {
       
       var amountToBeReturned= amountPaid.value - billAmount.value;
       remaining.innerText="RETURN CHANGE: " + amountToBeReturned;
       console.log(amountToBeReturned);
       amountDiv.style.display="block";
       changeDiv.style.display="block";
       calculateChange(amountToBeReturned);
       }
       else
       {
       cashMsg("Cash amount should atleast be equal to the bill amount!")
       changeDiv.style.display="none";
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
        cashMessage.style.display="none";
    };

    function showMsg(message)
    {
        errorMessage.style.display="block";
        errorMessage.innerText=message;
    };

    function cashMsg(message)
    {
        cashMessage.style.display="block";
        cashMessage.innerText=message;
    }
