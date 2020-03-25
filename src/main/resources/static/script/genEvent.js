function Event(random) {
  var bonus = 0;
  if (ages == 1) {
    switch (random) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5: {
        bonus = (sum/2).toFixed();
        sum = sum - bonus - grow;
        document.getElementById('warningMessageSpan').innerText = 'Вождь! Соседнее племя напала на вас и сожгла наши запасы!\nНаши потери: '+ bonus;
        warning();
    }
        break;
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11: {
        bonus = (sum/4).toFixed();
        sum = sum - bonus - grow;
        document.getElementById('warningMessageSpan').innerText = 'Вождь! Дикие звери стащили наши запасы!\nНаши потери: '+ bonus;
        warning();
      }
        break;
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18: {
        bonus = (sum/10).toFixed();
        sum = sum + parseInt(bonus, 10) - grow;
        document.getElementById('warningMessageSpan').innerText = 'Вождь! Охотники принесли благую весть!\nИх охота удалась и наши запасы пополнились на: '+ bonus;
        warning();
      }
        break;
      case 19:
      case 20: {
        bonus=(sum/4).toFixed();
        sum = sum + parseInt(bonus, 10) - grow;
        document.getElementById('warningMessageSpan').innerText = 'Вождь, произошло чудо! Пошёл дождь из рыбы!\nНаши запасы пополнились на: '+ bonus;
        warning();
      }
        break;
    }
  }



  else if (ages == 2) {
    switch (random) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5: {
        bonus = (sum/2).toFixed();
        sum = sum - bonus - grow;
        document.getElementById('warningMessageSpan').innerText = 'Мой Король! Соседнее королевство разграбила наши земли!\nНаши потери: '+ bonus;
        warning();
    }
        break;
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11: {
        bonus = (sum/4).toFixed();
        sum = sum - bonus - grow;
        document.getElementById('warningMessageSpan').innerText = 'Мой Король! Крестьяни затеяли бунт и отказались платить налоги!\nНаши потери: '+ bonus;
        warning();
      }
        break;
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18: {
        bonus = (sum/10).toFixed();
        sum = sum + parseInt(bonus, 10) - grow;
        document.getElementById('warningMessageSpan').innerText = 'Мой Король! Этот год был обилен на урожай!\nМы смогли собрать: '+ bonus;
        warning();
      }
        break;
      case 19:
      case 20: {
        bonus=(sum/4).toFixed();
        sum = sum + parseInt(bonus, 10) - grow;
        document.getElementById('warningMessageSpan').innerText = 'Мой Король! Наши войны разграбили земли соседнего королевства\nМы награбили: '+ bonus;
        warning();
      }
        break;
    }
  }
}
