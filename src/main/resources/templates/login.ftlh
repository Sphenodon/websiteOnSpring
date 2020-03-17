<#import "parts/commonP.ftlh" as c>
<#import "parts/loginP.ftlh" as l>

<@c.page>
    <h3>Вход</h3>
    <#if message??>
        <div class="alert alert-${messageType} container mt-5" role="alert">
            ${message}
        </div>
    </#if>
    <div class="container mt-5">
    <@l.login "/login" false/>
    </div>
</@c.page>