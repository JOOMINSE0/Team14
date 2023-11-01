import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Splash from "./pages/Splash/Splash"
import ChoosePosition from "./pages/ChoosePosition/ChoosePosition"
import WritePatientName from "./pages/WritePatientName/WritePatientName"
import Main from "./pages/Main/Main";
import Suggest from "./pages/Suggest/Suggest";
import MainGamePage from "./pages/Game/MainGamePage/MainGamePage";
import ChimaeYebang from "./pages/Game/ChimaeYebang/ChimaeYebang";
import ChimaeJindan from "./pages/Game/ChimaeJindan/ChimaeJindan";
import ChimaeChiryo from "./pages/Game/ChimaeChiryo/ChimaeChiryo";
import Login from "./pages/Login/Login";
import LogOut from "./pages/LogOut/LogOut"
import SignUp from "./pages/Signup/Signup"
import DeleteAccount from "./pages/DeleteAccount/DeleteAccount"
import InviteById from "./pages/InviteById/InviteById"
import FamilyDiaryPage from "./pages/FamilyDiaryPage/FamilyDiaryPage"
import MyDiaryPage from "./pages/MyDiaryPage/MyDiaryPage"
import WriteFamilyDiary from "./pages/WriteFamilyDiary/WriteFamilyDiary"
import WriteMyDiary from "./pages/WriteMyDiary/WriteMyDiary"
import ClickedFamilyDiary from "./pages/ClickedFamilyDiary/ClickedFamilyDiary"
import ClickedMyDiary from "./pages/ClickedMyDiary/ClickedMyDiary"
import MyPage from "./pages/MyPage/MyPage"
import ChangeCharacter from "./pages/ChangeCharacter/ChangeCharacter"
import WhatisChimae from "./pages/WhatisChimae/WhatisChimae"
import AllStepChimae from "./pages/AllStepChimae/AllStepChimae"


export default class AppRoutes extends React.Component {

    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Splash />} />
                    <Route path="/chooseposition" element={<ChoosePosition />} />
                    <Route path="/writepatientname" element={<WritePatientName />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/suggest" element={<Suggest />} />
                    <Route path="/maingamepage" element={<MainGamePage />} />
                    <Route path="/chimaeyebang" element={<ChimaeYebang />} />
                    <Route path="/chimaejindan" element={<ChimaeJindan />} />
                    <Route path="/chimaechiryo" element={<ChimaeChiryo />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<LogOut />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/deleteaccount" element={<DeleteAccount />} />
                    <Route path="/invitebyid" element={<InviteById />} />
                    <Route path="/familydiarypage" element={<FamilyDiaryPage />} />
                    <Route path="/mydiarypage" element={<MyDiaryPage />} />
                    <Route path="/writefamilydiary" element={<WriteFamilyDiary />} />
                    <Route path="/writemydiary" element={<WriteMyDiary />} />
                    <Route path="/clickedfamilydiary" element={<ClickedFamilyDiary />} />
                    <Route path="/clickedmydiary" element={<ClickedMyDiary />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/changecharacter" element={<ChangeCharacter />} />
                    <Route path="/whatischimae" element={<WhatisChimae />} />
                    <Route path="/allstepchimae" element={<AllStepChimae />} />
                </Routes>
            </Router>
        );
    }
}
