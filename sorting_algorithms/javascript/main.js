

const algorithms = ['bubble  sort'];

const options = document.getElementById('algorithm')


for (let i = 0; i < algorithms.length; i++) {

    var option = document.createElement('option');
    option.text = algorithms[i];
    options.add(option);
}