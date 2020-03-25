var next_age = document.getElementById('next_age');

next_age.onclick = function() {
  if (ages == 1) {
    if (upg1_number_1 >= 5 && upg2_number_1 >= 0 && upg3_number_1 >= 0) {
      if (confirm('Хотите ли вы перейти в новую эпоху? Учтите, что вы не сможете потом вернуться назад!')) {
        ages = 2;
        ChangeAge();
      }
      else {
      }
    }
    else {
      document.getElementById('warningMessageSpan').innerText = 'Мы ещё не готовы';
      warning();
    }
  }

  else if (ages == 2) {
    if (upg1_number_2 >= 5 && upg2_number_2 >= 0 && upg3_number_2 >= 0) {
      if (confirm('Хотите ли вы перейти в новую эпоху? Учтите, что вы не сможете потом вернуться назад!')) {
        ages = 3;
        ChangeAge();
      }
      else {
      }
    }
  }

  else {
    document.getElementById('warningMessageSpan').innerText = 'Что то сломалось';
    warning();
  }
}
