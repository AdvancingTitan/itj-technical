# ITjuana Technical Test
Technical test for Fullstack position @ ITjuana


# Going Over the Problems

<h2>Problem 1: Set for success</h2>
<em>Given a list <strong>nums</strong> of <strong>n</strong> integers where <strong>nums[i]</strong> is in the range [1, list length], write a function
that solves the following problem; return a list of all the integers in the range [1, list length] that do not appear in <strong>nums</strong>.</em><br>
<br>
<p>Here's how the solution came about:
<ol><li>Using a set became clear given that its a structure that only stores unique values, no repeats—helping to avoid unnecessary iteration on the <strong>nums</strong> list</li>
<li>It iterates through every number up to the the length of <strong>nums</strong>, which is compared to the unique values of the aptly named <strong>uniqueValues</strong> set</li>
<li>if a particular number iteration doesn't match the set, it's added to the missing numbers list. <strong>AMBER ALERT!</strong></li></ol>

Constructing a set from the <strong>nums</strong> array takes O(n) time, where <strong>n</strong> is the length of the <strong>nums</strong> array.
The loop that iterates through the range of integers from 1 to n takes O(n) time because it goes through each integer exactly once.<br>

Likewise, the space complexity is also O(n), as the set created to store unique values from the <strong>nums</strong> array could be as long as n (in a worst case scenario).
</p><br>

<h2>Problem 2: Hashing it out</h2>
<em>Given a list of integers <strong>nums</strong> and an integer <strong>target</strong>, write a function that solves the following problem; return indices of the two 
numbers such that they add up to <strong>target</strong>.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.</em><br>
<br>
<p>Here's how the function works:
<ol><li>It iterates through the nums array, and for each number, it calculates the <strong>diff</strong>erence (the number needed to reach the target).</li>
<li>It checks if the diff is already in the <strong>hashM</strong> dictionary. If it is, it means we've found a pair of numbers that add up to the target, so it returns their key values (indices)</li>
<li>If the complement is not in the dictionary, it stores the current number and its key in the the dictionary.</li>
<li>Since a solution is guaranteed as per the constraints, no need to check for an empty array or error handles.</li></ol>

This solution has a time complexity of O(n), where n is the length of the nums array, because it iterates through the array once.</p><br><br>


<h1 align="center">Hi 👋, I'm Alejandro Guzmán</h1>
<h3 align="center">A passionate developer from Guadalajara, MX.</h3>

- 🔭 I’m currently working on **my frontend skills, including web design and colour theory.**

- 🌱 Currently learning **Angular and React.**

- 👨‍💻 All of my projects are available right here on github

- 📝 I regularly write articles on [my blog](https://ajef-lif7.blogspot.com/search/label/AGC) & [thinktank](https://www.facebook.com/Politikhe/)

- 📫 Reach out **guzmancarrilloa@yahoo.com**

- 📄 Learn about my experiences [advancingtitan.github.io/site-of-the-self/](https://advancingtitan.github.io/site-of-the-self/)

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://twitter.com/agc_journalism" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="agc_journalism" height="30" width="40" /></a>
<a href="https://linkedin.com/in/alejandro-guzmán-23a732187/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="alejandro-guzmán-23a732187/" height="30" width="40" /></a>
<a href="https://www.leetcode.com/advancingtitan" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="advancingtitan" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> </p>
