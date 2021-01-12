
    document.getElementById("btnTC").addEventListener("click", function(){
      // Get our word element 
      let wordElement = document.getElementById("palTestBox");
      
      // From that, get our word from the element
      let wordCheck = wordElement.value;
      
      // Reverse that word so we can do our palindrome test
      let reverseWord = wordCheck.split('').reverse().join('');
      
      // Get paragraph elements
      let palTest = document.getElementById("palTest");
      let palRev = document.getElementById("palRev");
      
      // Write out the word to test forward and backward in the appropriate
      // paragraph elements
      palTest.innerHTML = wordCheck;
      palRev.innerHTML = reverseWord;

      // Do our comparison of the two values, and write out the 'result'
      // in the palTestBox element
      if (wordCheck.toLowerCase() == reverseWord.toLowerCase()){
        wordElement.value = "It's a Palindrome!";
      }
      else {
        wordElement.value = "Sorry... It is <i>Not</i> a Palindrome!";
      }
    });
