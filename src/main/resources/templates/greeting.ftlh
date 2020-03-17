<#import "parts/commonP.ftlh" as c>
<#include "parts/securityP.ftlh">
<@c.page>
<#if !known>
    <h4>Здравствуй, путник</h4>
    <div>
        <div class="container mt-3">
            <p>Евгений круть</p>
            <p></p>
        </div>
        <form action="/login" method="post">
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Имя</label>
                <div class="col-sm-6">
                    <input type="text" name="username" class="form-control ${(usernameError??)?string('is-invalid', '')} border-dark " value="<#if user??>${user.username}</#if>" placeholder="Ваше имя пользователя" />
                    <#if usernameError??>
                        <div class="invalid-feedback">
                            ${usernameError}
                        </div>
                    </#if>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Пароль:</label>
                <div class="col-sm-6">
                    <input type="password" name="password" class="form-control border-dark" placeholder="*****" />
                </div>
            </div>
            <input type="hidden" name="_csrf" value="${_csrf.token}" />
            <button class="btn btn-dark" type="submit">Войти</button>
        </form>
        <button type="button" class="btn btn-success mt-3" data-toggle="modal" data-target="#But">Но...</button>
    </div>

    <div id="But" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredScrollableTitle" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalCenteredScrollableTitle">Что? У вас нет аккаунта?</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img src="/static/img/notProblem.jpg" class="img-fluid" alt="Не беда">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-toggle="modal" data-dismiss="modal" aria-label="Close" data-target="#exampleModalCenteredScrollable">Регистрация</button>
                </div>
            </div>
        </div>
    </div>

    <div id="exampleModalCenteredScrollable" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredScrollableTitle" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenteredScrollableTitle">Правила</h5>
                    <button type="button" class="btn" data-dismiss="modal">Уйти</button>
                </div>
                <div class="modal-body">
                    <p>Соблюдать школьные правила</p>
                </div>
                <div class="modal-footer">
                    <a class="btn btn-success" href="/registration">Регистрация</a>
                </div>
            </div>
        </div>
    </div>
</#if>
<#if known>
    <script>document.location.replace('news');</script>
</#if>
</@c.page>
