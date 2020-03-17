<#assign
    known = Session.SPRING_SECURITY_CONTEXT??
>

<#if known>
    <#assign
    user = Session.SPRING_SECURITY_CONTEXT.authentication.principal
    name = user.getUsername()
    isAdmin = user.isAdmin()
    isStaff = user.isStaff()
    currentUserId = user.getId()
    >
<#else>
    <#assign
    name = "Неизвестный"
    isAdmin = false
    currentUserId = -1
    >
</#if>