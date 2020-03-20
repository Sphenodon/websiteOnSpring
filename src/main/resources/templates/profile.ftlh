<#import "parts/commonP.ftlh" as c>

<@c.page>
    <h5>Привет, ${username}</h5>
    ${message!}
    <div class="accordion mt-4" id="accordionProfile">
        <form method="post">

            <div class="card">
                <div class="card-header">
                    <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#collapseEmail">
                        Изменить email
                    </button>
                </div>
                <div id="collapseEmail" class="collapse" data-parent="#accordionProfile">
                    <div class="card-body">
                        <div class="form-group row mt-1">
                            <label class="col-sm-2 col-form-label">Новый email:</label>
                            <div class="col-sm-6">
                                <input type="email" name="email" class="form-control" placeholder="some@some.com" value="${email!''}"/>
                            </div>
                        </div>
                        <input type="hidden" name="_csrf" value="${_csrf.token}" />
                        <button class="btn btn-dark" type="submit">Сохранить</button>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#collapsePassword">
                        Изменить пароль
                    </button>
                </div>
                <div id="collapsePassword" class="collapse" data-parent="#accordionProfile">
                    <div class="card-body">
                        <div class="form-group row mt-1">
                            <label class="col-sm-2 col-form-label">Новый пароль:</label>
                            <div class="col-sm-6">
                                <input type="password" name="password" class="form-control" placeholder="*****" />
                            </div>
                        </div>
                        <input type="hidden" name="_csrf" value="${_csrf.token}" />
                        <button class="btn btn-dark" type="submit">Сохранить</button>
                    </div>
                </div>
            </div>

        </form>
    </div>
</@c.page>