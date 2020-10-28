window.onload = function()
{
    timeValueInput = document.getElementById('timeValue');
    timeValueInput.value = 30;
    FormSelect = document.getElementById('FormControlSelect1');
    //FormSelect.addEventListener('change', () => tikTakBoom.countOfPlayers = parseInt(FormSelect.value));    
    tikTakBoom.init(
        tasks,
        document.getElementById('timerField'),
        document.getElementById('gameStatusField'),
        document.getElementById('questionField'),
        document.getElementById('answer1'),
        document.getElementById('answer2'),
        
    );

    document.getElementById('btnStart').addEventListener('click', () => {
        tikTakBoom.init(
            tasks,
            document.getElementById('timerField'),
            document.getElementById('gameStatusField'),
            document.getElementById('questionField'),
            document.getElementById('answer1'),
            document.getElementById('answer2'),
        );
        tikTakBoom.run()
    });
    
    document.getElementById('btnStop').addEventListener('click', () => tikTakBoom.finish('lose'));

    //tikTakBoom.run();
}




