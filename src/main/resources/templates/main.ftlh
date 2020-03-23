<#import "parts/commonP.ftlh" as c>
<#include "parts/securityP.ftlh">
<@c.page>
    <#if known>
    <#include "parts/messageSender.ftlh" />
    <#include "parts/messageList.ftlh" />
    </#if>
</@c.page>