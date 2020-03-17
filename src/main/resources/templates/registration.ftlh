<#import "parts/commonP.ftlh" as c>
<#import "parts/loginP.ftlh" as l>

<@c.page>
    <h3>Регистрация аккаунта</h3>
    <div class="container mt-5">
        ${message!}
        <@l.login "/registration" true/>
    </div>
</@c.page>