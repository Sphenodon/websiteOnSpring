<!DOCTYPE html>
<html lang="en" >
<head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="/static/main.css">
    <link rel="stylesheet" href="/static/scene.css">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

</head>
<body>
<#include "parts/securityP.ftlh" />
<#include "parts/navbarP.ftlh">
<input id="agesValue" type="hidden" name="" value="<#if clicker??><#if clicker.age??>${clicker.age}<#else>1</#if><#else>1</#if>" />
<input id="number1ValueAge1" type="hidden" name="" value="<#if clicker??><#if clicker.age??>${clicker.number1_age1}<#else>0</#if><#else>0</#if>" />
<input id="number2ValueAge1" type="hidden" name="" value="<#if clicker??><#if clicker.age??>${clicker.number2_age1}<#else>0</#if><#else>0</#if>" />
<input id="number3ValueAge1" type="hidden" name="" value="<#if clicker??><#if clicker.age??>${clicker.number3_age1}<#else>0</#if><#else>0</#if>" />
<input id="number1ValueAge2" type="hidden" name="" value="<#if clicker??><#if clicker.age??>${clicker.number1_age2}<#else>0</#if><#else>0</#if>" />
<input id="number2ValueAge2" type="hidden" name="" value="<#if clicker??><#if clicker.age??>${clicker.number2_age2}<#else>0</#if><#else>0</#if>" />
<input id="number3ValueAge2" type="hidden" name="" value="<#if clicker??><#if clicker.age??>${clicker.number3_age2}<#else>0</#if><#else>0</#if>" />

<div id="warningMessage" class="">
    <span id="warningMessageSpan"></span>
</div>



<!-- СЦЕНА -->
<div class="Background">
    <!-- Задник -->
    <img src="" class="background" id="background">
    <div class="sun">
        <img src="img/sun.png" alt="">
    </div>
    <div class="cloud" id="cloud1">
        <img src="img/cloud1.png" alt="">
    </div>
    <div class="cloud" id="cloud2">
        <img src="img/cloud2.png" alt="">
    </div>
</div>
<!-- ИНТЕРФЕЙС -->
<div class="Main">
    <form method="post" enctype="multipart/form-data">
    <!-- Счет -->
    <h1 id="score"></h1>
    <!-- ИССЛЕДОВАНИЯ -->
    <!-- Кнопка исследований -->
    <div class="research">
        <button type="button" name="button" id="research_btn">
            <img src="img/researches.png" alt="" id="" class="img">
        </button>
    </div>
    <!-- Модуль исследований -->
    <div class="research_window" id="research_window">
        <div class="close_btn">
            <button type="button" name="button" id="close_btn2">
                <img src="img/close.png" alt="">
            </button>
        </div>
        <div class='researches'>
            <div id="age">
            </div>
            <br><br>
            <button type='button' name='button' id='next_age'>Переход в следующую эпоху</button>
        </div>
    </div>
    <!-- МОНЕТОЧКА -->
    <!-- Сумма -->
    <div class="summary">
        <h1>Монеты:
            <div id="sum"></div>
        </h1>
    </div>
    <!-- Clicker-кнопка -->
    <div class="click">
        <button type="button" name="button" id="click_btn">
            <img src="img/gold.png" alt="" class="img">
        </button>
    </div>
    <!-- УЛУЧШЕНИЯ -->
    <!-- Кнопка улучшенний -->
    <div class="upgrade">
        <button type="button" name="button" id="upgrade_btn">
            <img src="img/upgrade.png" alt="" class="img">
        </button>
    </div>
    <!-- Модуль улучшенний -->
    <div class="game_window" id="upgrade_window">
        <div class="close_btn">
            <button type="submit" class="btn-success btn-lg btn-block mt-5" id="close_btn1"><img src="img/close.png" alt=""></button>
        </div>
        <div id="upg"class="">
            <div class='upgrades '>
                <div class=''>
                    <button type="button" id='first'>
                        <div id="f">
                        </div>
                    </button>
                </div>
                <div class=''>
                    <button type="button" id='second'>
                        <div id="s">
                        </div>
                    </button>
                </div>
                <div class=''>
                    <button type="button" id='third'>
                        <div id="t">
                        </div>
                    </button>
                </div>
            </div>
            <button class="btn-success btn-lg btn-block mt-5" type="submit">Построить</button>
        </div>
    </div>
        <input id="inputAges" type="hidden" name="age" value="" />
        <input id="inputNumber1Age1" type="hidden" name="number1_age1" value="" />
        <input id="inputNumber1Age2" type="hidden" name="number1_age2" value="" />
        <input id="inputNumber2Age1" type="hidden" name="number2_age1" value="" />
        <input id="inputNumber2Age2" type="hidden" name="number2_age2" value="" />
        <input id="inputNumber3Age1" type="hidden" name="number3_age1" value="" />
        <input id="inputNumber3Age2" type="hidden" name="number3_age2" value="" />
        <input type="hidden" name="_csrf" value="${_csrf.token}" />
    <!-- Прирост за клик -->
    <div class="grow">
        <h1>Прирост:
            <div id="grow"></div>
        </h1>
    </div>
    <div class="back" id="back">
        <button class="w-100 h-100" type="submit" name="button"></button>
    </div>
    </form>
</div>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<script src="script/cloud.js"></script>
<script src="script/windows.js"></script>

<script src="script/age.js"></script>
<script src="script/research.js"></script>
<script src="script/upgrades.js"></script>

<script src="script/genNumber.js"></script>
<script src="script/genEvent.js"></script>

</body>