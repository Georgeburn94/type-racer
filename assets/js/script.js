document.addEventListener('DOMContentLoaded', () => {
    const easySentences = [
        "The cat sat on the mat. It was a sunny day and the cat was enjoying the warmth. The birds were chirping and the flowers were blooming. It was a perfect day for a nap.",
        "A quick brown fox jumps over the lazy dog. The dog didn't even notice the fox. It was too busy sleeping in the sun. The fox continued on its way, looking for something to eat.",
        "She sells seashells by the seashore. The shells she sells are surely seashells. So if she sells shells on the seashore, I'm sure she sells seashore shells.",
        "How much wood would a woodchuck chuck if a woodchuck could chuck wood? A woodchuck would chuck as much wood as a woodchuck could chuck if a woodchuck could chuck wood.",
        "The sun sets in the west. It was a beautiful sunset with shades of orange, pink, and purple. The sky was clear and the stars were starting to appear."
    ];

    const mediumSentences = [
        "The quick brown fox jumps over the lazy dog. The dog didn't even notice the fox. It was too busy sleeping in the sun. The fox continued on its way, looking for something to eat.",
        "Pack my box with five dozen liquor jugs. The box was heavy and difficult to carry. But it was worth it for the party that was about to happen. Everyone was excited and ready to have a good time.",
        "Jackdaws love my big sphinx of quartz. The sphinx was a beautiful piece of art. It was made of quartz and had intricate details. The jackdaws would often perch on it and admire its beauty.",
        "The five boxing wizards jump quickly. They were practicing for the big match. Each wizard had their own unique style and technique. It was going to be an exciting competition.",
        "How razorback-jumping frogs can level six piqued gymnasts! The frogs were amazing athletes. They could jump high and far. The gymnasts were impressed and inspired by their skills."
    ];

    const hardSentences = [
        "Sphinx of black quartz, judge my vow. The sphinx was a mysterious and ancient creature. It had seen many things and had many secrets. The vow was a solemn promise that had to be kept.",
        "The quick onyx goblin jumps over the lazy dwarf. The dwarf was too slow to react. The goblin was quick and agile. It was a close call, but the goblin made it to safety.",
        "Jinxed wizards pluck ivy from the big quilt. The quilt was a magical artifact. It had the power to grant wishes. The wizards were careful not to disturb its magic as they plucked the ivy.",
        "Crazy Fredrick bought many very exquisite opal jewels. The jewels were rare and valuable. Fredrick was known for his eccentric taste. He loved to collect unique and beautiful things.",
        "We promptly judged antique ivory buckles for the next prize. The buckles were from a bygone era. They were beautifully crafted and had intricate designs. The judges were impressed and had a difficult time choosing a winner."
    ];

    function updateSentence() {
        const difficulty = document.getElementById('difficulty').value;
        const typingText = document.getElementById('typingText');
        const difficultyLabel = document.getElementById('difficultyLabel');

        let sentences;
        if (difficulty === 'Easy') {
            sentences = easySentences;
        } else if (difficulty === 'Medium') {
            sentences = mediumSentences;
        } else if (difficulty === 'Hard') {
            sentences = hardSentences;
        }

        const randomIndex = Math.floor(Math.random() * sentences.length);
        typingText.textContent = sentences[randomIndex];
        difficultyLabel.innerHTML = `<strong>Level:</strong> ${difficulty}`;
    }

    function startTest() {
        startTime = new Date();
        document.querySelector('.btn-primary').disabled = true;
        document.querySelector('.btn-danger').disabled = false;
        document.querySelector('.btn-secondary').disabled = true;

        const textInput = document.querySelector('textarea');
        textInput.value = ''; 
        textInput.focus();  

        updateSentence(); // Add this line to update the sentence
    }

    function stopTest() {
        endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000;
        document.querySelector('.btn-primary').disabled = false;
        document.querySelector('.btn-danger').disabled = true;
        document.querySelector('.btn-secondary').disabled = false;
        displayResults(timeTaken);
    }

    function displayResults(timeTaken) {
        document.querySelector('.results p:nth-child(3)').innerText = `Time: ${timeTaken.toFixed(2)}s`;
    }

    function highlightText() {
        const typingText = document.getElementById('typingText').textContent;
        const typingArea = document.getElementById('typingArea').value;
        const typingTextArray = typingText.split('');
        const typingAreaArray = typingArea.split('');

        let highlightedText = '';
        for (let i = 0; i < typingTextArray.length; i++) {
            if (typingAreaArray[i] === undefined) {
                highlightedText += `<span>${typingTextArray[i]}</span>`;
            } else if (typingTextArray[i] === typingAreaArray[i]) {
                highlightedText += `<span style="color: blue;">${typingTextArray[i]}</span>`;
            } else {
                highlightedText += `<span style="color: red;">${typingTextArray[i]}</span>`;
            }
        }

        document.getElementById('typingText').innerHTML = highlightedText;
    }

    document.getElementById('difficulty').addEventListener('change', updateSentence);
    document.querySelector('.btn-primary').addEventListener('click', startTest);
    document.querySelector('.btn-danger').addEventListener('click', stopTest);
    document.getElementById('typingArea').addEventListener('input', highlightText);
});