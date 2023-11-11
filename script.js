<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login-page</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="https://lh3.googleusercontent.com/fife/AK0iWDwDoBVQOLCheYw6x18x0iGwdsoGSjpvD8U3PlCQ8RVoEgIa4CiNMsgh7wAKmSTwkIwdh-XMwkA51s627A96ksjLECQS9vuV5rVl6P7pu7UZeMPak12Ls2-6oBrx-9wVPWDMIHBciEAqnoF3Oy7VW3UhmN1_7rZcfNNIPOGnEPtB2qxKgHNK2eqXVbXE4WCJMq0Z0PvE6-LAjbUpw1dDcnitllL4su-ZWv_edkzuyrtdqcrkDHZAvQOaI5mT8j5MPrqMe9fw7tZqu12Eid7lTjcM7cwiki3CElhoEJkUNuOXAJbry-V-poqBThstNHszJqoTjkgL135zc8ZC0QY_OzttpMdu7VHFOmR28TM0a-MKUBnTsH5QWRb6mqHu4FDPi_cmol1XP_4C7DLVZG3WVnF-C3aFwKTEIzi_eGu5XTOVe9Fq6ra4PWHPyqVePS3NbuaEcSpyl14lSwfGiP6py5X0UrHCLpEbrCllDfUr1QhJb_dGaO2K7JbA3He0DttR8gAWwGKlOKGHWbTDSINXD5JZZqKVaz0p9jAEr5vGvLeqZJdby7OJEVAbzsAlQNUCsu8dl7nThptY3Z1Az3DY1HHsIi8uSDYHBXuzC3Snl5kF1D6B2zFSrkygLUEPqTcHkcIrYhP2zqJqxIMLDgVR9Pe8seK9RBhWLMOgJiGcKT7D1DK2dIbrfDVLI4x-NHgEkqpDZVYwtm4Ay_V6bHQJKhPHKiSK1Hp1zGc3dSzazEhny3lSIPT564cpG4EDgFpjkoVYb21CIw3ZmbAnMZam5Ufu9nu9V76rX_5Vp1iDXYxDCNwuIQQoI4PpTAYQ7eTBdAomOgYs0ucJZWq8zsfaN4bj4sGF5zj10K0bOE7TkbtLsiMaGpGltI6TKqJ2T5E0Z70-ADyN8c7nZ8PE2PDMSp04AhtMETAQizuaUPCCvMGMe-ybs2xdaPyJKSsjW-EQBubiRsVptLa58AVRvMKKQu-B2Jf2tmPJvflzF-Cap437pN11x0w8hMbG8zzDMcyiFBfjohcyAgVIc8Ku8wlp0_7zUVucKb9Et8DUdmRTd3zuXEuu8j6Rak3pEHsszPhdMp4GFsd2l3BKD4MOfvMVDbV9CgiXEW9ONAYQHWieu4saBasuKvVf-IUwD55yA8CWIbaKO-QHfG1wlfpLW55TgsczXFl3J9ucMPvylEiRuclIUO58YrideB7v-Zi-SSJGtyEc-XAfvgRoBDBaizTtHmTGFHXMZK-BD1xCmDUqk5Q_k3UoUpYr8AShA_1IacVEDYQnFN-JejYHue2ZgpdzcM2Kb-E4Ngzt6sGnn7JtDpYtEc-OCHj1NquzPSdI6b63IENjlygSmEhVHL3gK1Gylr_sDopBIpWHuUJp4Zl1T5DQWDEMhpjnku1-134OBc9EkFplHbli-Xxrbpb5OtA7iSZ0fOTmYCqSExJEbIaJraVw9M14UVexylOHl0pQ_PaE8HdaLaVp1MbGWEmAFaewgOPwqCRPJz27ZdtwpFDohV38Qa3AEqAj1L5sdSkTP5nEIiD-jKJETJUsa9AqMteXLUxecQ6H-t1tAd5Zdx6u4IDLS435HOrXEtTojxRZfuvPCc3NDqEzqcthBTLESL6jw5CnIMdPo53p2W-sQRU1PAicTB_EI3wuhPG0C-UqLcBr7jGhItH9D0PV6yZFZzfx8BElFA=s325-w325-h315-s-no-gm?authuser=0" type="image/x-icon">
</head>
<body>
    <div class="content">
        <div class="login-page">
            <h2 class="title">login</h2>

            <div class="inputs">
                <div class="input-box">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input name="email" id="email" type="email" required placeholder="Exemple@gmail.com">
                    <span id="email-error" class="error-message"></span>
                </div>
                <div class="input-box">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input name="password" id="password" type="password" required placeholder="Password">
                    <span id="password-error" class="error-message"></span>
                </div>
            </div>
            <div class="buttons">           
                
                <input name="checkbox" id="checkbox" type="checkbox"><label class="label" for="checkbox">Remember Me</label>
                <a class=" forget a" href="#">Forget Password?</a>
                <button class="button" id="logIn"><a >log in</a></button>
                <div class="register">
                    <label>Don't have account <a class="a" href="#">register</a></label>
                </div>
            </div>
        </div>
    </div>

    <script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></script>
    <script src="script.js"></script>
</body>
</html>
