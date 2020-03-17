<#import "parts/commonP.ftlh" as c>

<@c.page>
    <h3>Изменение прав пользователя</h3>
    <form action="/user" method="post">
        <div class="form-group mt-4">
            <input type="text" name="username" value="${user.username}">
            <div class="form-group mt-4">
                <p>USER-пользователь</p>
                <p>STAFF-сотрудник</p>
                <p>ADMIN-администратор</p>
            </div>
        </div>
        <#list roles as role>
            <div>
                <label><input type="checkbox" name="${role}" ${user.roles?seq_contains(role)?string("checked", "")}>${role}</label>
            </div>
        </#list>
        <input type="hidden" value="${user.id}" name="userId">
        <input type="hidden" value="${_csrf.token}" name="_csrf">
        <button class="btn btn-dark" type="submit">Сохранить</button>
    </form>
</@c.page>