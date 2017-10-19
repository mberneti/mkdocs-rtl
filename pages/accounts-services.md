# سرویس احراز هویت
#### ۱ـ دریافت کد احراز هویت
<p class="cl"><a href="./swagger/#!/Accounts/ApiV1AccountsGetverifycodePost" target="_blank" class="md-source-file">
Accounts > GetVerifyCode</a></p>

#### ۲ـ ورود با استفاده از کد احراز هویت (دریافت توکن JWT)

<p class="cl"><a href="./swagger/#!/Accounts/ApiV1AccountsLoginPost" target="_blank" class="md-source-file">Accounts > Login</a></p>

* مقدار پارامتر PushId باید برابر id منحصر بفردی باشد که بوسیله api OneSignal دریافت می‌شود

#### ۳ـ بروز رسانی کلید JWT منقضی شده

<p class="cl"><a href="./swagger/#!/Accounts/ApiV1AccountsRefreshtokenPost" target="_blank" class="md-source-file">Accounts > RefreshToken</a></p>

!!! warning "توجه"
    تمام متدهایی که در پاسخ یک لیست بر می‌گردانند و دارای صفحه‌بندی هستند شماره صفحه را بصورت یک پارامتر page که با مقدار ۱ شروع می‌شود دریافت می‌کنند.

#### آموزش احراز هویت در swagger Authorize

<p class="ci"><img alt="احراز هویت در swagger " src="../img/swagger-auth.png"></p>
 
برای احراز هویت در swagger کافیست روی دکمه Authorize کلیک کرده و در باکس ورودی api_key توکن jwt را بصورت زیر وارد کرده و روی دکمه Authorize کلیک کنید و بعد از آن تمام درخواست‌های ارسالی شما شما به همراه این توکن ارسال خواهد شد.

```
Bearer <JWT-Token>
```
