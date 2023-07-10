		    // Lab Practical 1: Fibonacci Series
		    function generateFibonacci() {
		      var n = parseInt(document.getElementById('fibonacciInput').value);
		      var result = "";
		      var t1 = 0;
		      var t2 = 1;
		      var nextTerm;
		      
		      result += "Fibonacci Series: ";
		      
		      for (var i = 1; i <= n; ++i) {
		        result += t1 + " ";
		        nextTerm = t1 + t2;
		        t1 = t2;
		        t2 = nextTerm;
		      }
		      
		      document.getElementById('fibonacciOutput').textContent = result;
		    }
		    
		    // Lab Practical 2: Factorial Calculation
		    function calculateFactorial() {
		      var n = parseInt(document.getElementById('factorialInput').value);
		      var result = 1;
		      
		      if (n >= 0) {
		        for (var i = 1; i <= n; i++) {
		          result *= i;
		        }
		      } else {
		        result = "Not defined for negative numbers";
		      }
		      
		      document.getElementById('factorialOutput').textContent = "Factorial of " + n + " is " + result;
		    }
		    
		    // Lab Practical 3: Prime Number Check
		    function checkPrime() {
		      var n = parseInt(document.getElementById('primeInput').value);
		      var isPrime = true;
		      
		      if (n < 2)
		        isPrime = false;
		      else {
		        for (var i = 2; i <= Math.sqrt(n); i++) {
		          if (n % i === 0) {
		            isPrime = false;
		            break;
		          }
		        }
		      }
		      
		      var output = isPrime ? n + " is a prime number." : n + " is not a prime number.";
		      document.getElementById('primeOutput').textContent = output;
		    }
		    
		    // Lab Practical 4: Array Sum
		    function calculateArraySum() {
		      var inputs = document.getElementsByClassName('arrayInput');
		      var size = inputs.length;
		      var arr = [];
		      
		      for (var i = 0; i < size; ++i) {
		        arr.push(parseInt(inputs[i].value));
		      }
		      
		      var sum = arr.reduce(function (a, b) {
		        return a + b;
		      }, 0);
		      
		      document.getElementById('arraySumOutput').textContent = "Sum of array elements: " + sum;
		    }


//java Practicals

			function checkEvenOrOdd() {
			  const numberInput = document.getElementById('evenOddInput');
			  const number = parseInt(numberInput.value);

			  if (isNaN(number)) {
			    document.getElementById('evenOddOutput').textContent = 'Please enter a valid number.';
			    return;
			  }

			  if (number % 2 === 0) {
			    document.getElementById('evenOddOutput').textContent = number + ' is even.';
			  } else {
			    document.getElementById('evenOddOutput').textContent = number + ' is odd.';
			  }
			}

			function checkLeapYear() {
			  const yearInput = document.getElementById('leapYearInput');
			  const year = parseInt(yearInput.value);

			  if (isNaN(year)) {
			    document.getElementById('leapYearOutput').textContent = 'Please enter a valid year.';
			    return;
			  }

			  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

			  if (isLeapYear) {
			    document.getElementById('leapYearOutput').textContent = year + ' is a leap year.';
			  } else {
			    document.getElementById('leapYearOutput').textContent = year + ' is not a leap year.';
			  }
			}

			function findLargest() {
			  const num1Input = document.getElementById('largestNum1');
			  const num2Input = document.getElementById('largestNum2');
			  const num3Input = document.getElementById('largestNum3');

			  const num1 = parseInt(num1Input.value);
			  const num2 = parseInt(num2Input.value);
			  const num3 = parseInt(num3Input.value);

			  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
			    document.getElementById('largestNumOutput').textContent = 'Please enter valid numbers.';
			    return;
			  }

			  const largest = Math.max(num1, num2, num3);

			  document.getElementById('largestNumOutput').textContent = 'The largest number is: ' + largest;
			}

			function checkPalindrome() {
			  const wordInput = document.getElementById('palindromeInput');
			  const word = wordInput.value.trim().toLowerCase();

			  if (word === '') {
			    document.getElementById('palindromeOutput').textContent = 'Please enter a word.';
			    return;
			  }

			  const reversedWord = word.split('').reverse().join('');
			  const isPalindrome = word === reversedWord;

			  if (isPalindrome) {
			    document.getElementById('palindromeOutput').textContent = word + ' is a palindrome.';
			  } else {
			    document.getElementById('palindromeOutput').textContent = word + ' is not a palindrome.';
			  }
			}

//ABOUT US & EXPERIENCE
			
			window.addEventListener('DOMContentLoaded', function() {
			    var carousel = document.getElementById('testimonialCarousel');
			    var prevButton = carousel.querySelector('.prev');
			    var nextButton = carousel.querySelector('.next');
			    var indicators = carousel.querySelectorAll('.indicator');
			    var items = carousel.querySelectorAll('.item');

			    var currentItem = 0;

			    function showItem(index) {
			        items[currentItem].classList.remove('active');
			        indicators[currentItem].classList.remove('active');

			        currentItem = (index + items.length) % items.length;

			        items[currentItem].classList.add('active');
			        indicators[currentItem].classList.add('active');
			    }

			    function showNextItem() {
			        showItem(currentItem + 1);
			    }

			    function showPrevItem() {
			        showItem(currentItem - 1);
			    }

			    nextButton.addEventListener('click', showNextItem);
			    prevButton.addEventListener('click', showPrevItem);

			    for (var i = 0; i < indicators.length; i++) {
			        (function(index) {
			            indicators[index].addEventListener('click', function() {
			                showItem(index);
			            });
			        })(i);
			    }
			});


//for hiddent content
    
    function toggleSection(sectionNumber) {
      var section = document.getElementById("section" + sectionNumber);
      if (section.style.display === "none") {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    }




