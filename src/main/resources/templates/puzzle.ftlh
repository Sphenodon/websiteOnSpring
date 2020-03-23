<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Puzzle</title>
    <link rel="stylesheet" href="/static/style.css">
    <link rel="stylesheet" href="/static/puzzle.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<body onload="<#if href??>puzzle.setImage('${href}', ${difficult})<#else>puzzle.init()</#if>">
<#include "parts/navbarP.ftlh">
    <#if known>
    <div class="accordion" id="accordionProfile">
        <div class="card">
            <div class="card-header">
                <button class="btn btn-dark" onclick="closeParent();" type="button" data-toggle="collapse" data-target="#collapsePictureChoice">
                    Изменить картинку
                </button>
            </div>
            <div id="collapsePictureChoice" class="collapse" data-parent="#accordionProfile">
                <div class="card-body">
                    <div class="form-group row mt-1">
                        <label class="col-sm-2 col-form-label">Ссылка</label>
                        <div class="col-sm-6">
                            <input id="setImage" type="text" class="form-control" value="" placeholder="https:/somesite/***.***"/>
                        </div>
                    </div>
                    <div class="form-group row mt-1">
                        <label class="col-sm-2 col-form-label">Сложность</label>
                        <div class="col-sm-6">
                            <input id="difficult" type="text" class="form-control" value="" placeholder="от 1 до 20"/>
                        </div>
                    </div>
                    <button id="setMyImage" class="btn btn-dark" data-toggle="collapse" data-target="#collapsePictureChoice" type="submit" onclick="puzzle.setImage();">Собрать свою картинку</button>
                    <button class="btn btn-dark" data-toggle="collapse" data-target="#collapsePictureChoice" type="submit" onclick="openParent();">Вернуть прежнюю</button>
                </div>
            </div>
        </div>
    </div>
    <div class="" id="sorryImageShouldBeSmaller"></div>
    <div class="parent" id="parent">
        <div class="block" id="block">
            <canvas id="canvas"></canvas>
            <div class="form-group mt-3">
                <form method="post" enctype="multipart/form-data">
                    <div class="form-group">
                        <input type="text"
                               name="text"
                               id="MessageAfterGame"
                               class="form-control ${(textError??)?string('is-invalid', '')}"
                               value=""
                               placeholder="Введите сообщение" />
                        <#if textError??>
                            <div class="invalid-feedback">
                                ${textError}
                            </div>
                        </#if>
                    </div>
                    <div class="form-group">
                        <input type="text"
                               name="tag"
                               id="TagAfterGame"
                               class="form-control ${(textError??)?string('is-invalid', '')}"
                               value=""
                               placeholder="Хэштэг" />
                        <#if tagError??>
                            <div class="invalid-feedback">
                                ${tagError}
                            </div>
                        </#if>
                    </div>
                    <input type="hidden" name="puzzle_href" id="puzzleHref" value="" />
                    <input type="hidden" name="puzzle_difficult" id="puzzleDifficult" value="" />
                    <input type="hidden" name="_csrf" value="${_csrf.token}" />
                    <div class="form-group">
                        <button type="submit" class="btn btn-dark">Добавить</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="puzzle.js"></script>
    </#if>
</body>
</html>