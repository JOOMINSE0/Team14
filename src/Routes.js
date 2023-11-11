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
import YouAreOk from "./pages/Game/YouAreOk/YouAreOk";
import WatchOut from "./pages/Game/WatchOut/WatchOut";
import YouAreDanger from "./pages/Game/YouAreDanger/YouAreDanger";
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
import FamilyGuide from "./pages/FamilyGuide/FamilyGuide"
import ModifyFamilyDiary from "./pages/ModifyFamilyDiary/ModifyFamilyDiary"
import ModifyMyDiary from "./pages/ModifyMyDiary/ModifyMyDiary"
import FamilyDiary_ex_1 from "./pages/FamilyDiary_ex_1/FamilyDiary_ex_1"
import FamilyDiary_ex_2 from "./pages/FamilyDiary_ex_2/FamilyDiary_ex_2"
import FamilyDiary_ex_3 from "./pages/FamilyDiary_ex_3/FamilyDiary_ex_3"
import FamilyDiary_ex_4 from "./pages/FamilyDiary_ex_4/FamilyDiary_ex_4"
import FamilyDiary_ex_5 from "./pages/FamilyDiary_ex_5/FamilyDiary_ex_5"
import FamilyDiary_ex_6 from "./pages/FamilyDiary_ex_6/FamilyDiary_ex_6"
import MyDiary_ex_1 from "./pages/MyDiary_ex_1/MyDiary_ex_1"
import MyDiary_ex_2 from "./pages/MyDiary_ex_2/MyDiary_ex_2"
import MyDiary_ex_3 from "./pages/MyDiary_ex_3/MyDiary_ex_3"
import MyDiary_ex_4 from "./pages/MyDiary_ex_4/MyDiary_ex_4"
import MyDiary_ex_5 from "./pages/MyDiary_ex_5/MyDiary_ex_5"
import MyDiary_ex_6 from "./pages/MyDiary_ex_6/MyDiary_ex_6"

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
                    <Route path="/familyguide" element={<FamilyGuide />} />
                    <Route path="/youareok" element={<YouAreOk />} />
                    <Route path="/watchout" element={<WatchOut />} />
                    <Route path="/youaredanger" element={<YouAreDanger />} />
                    <Route path="/modifyfamilydiary" element={<ModifyFamilyDiary />} />
                    <Route path="/modifymydiary" element={<ModifyMyDiary />} />
                    <Route path="/familydiary_ex_1" element={<FamilyDiary_ex_1 />} />
                    <Route path="/familydiary_ex_2" element={<FamilyDiary_ex_2 />} />
                    <Route path="/familydiary_ex_3" element={<FamilyDiary_ex_3 />} />
                    <Route path="/familydiary_ex_4" element={<FamilyDiary_ex_4 />} />
                    <Route path="/familydiary_ex_5" element={<FamilyDiary_ex_5 />} />
                    <Route path="/familydiary_ex_6" element={<FamilyDiary_ex_6 />} />
                    <Route path="/mydiary_ex_1" element={<MyDiary_ex_1 />} />
                    <Route path="/mydiary_ex_2" element={<MyDiary_ex_2 />} />
                    <Route path="/mydiary_ex_3" element={<MyDiary_ex_3 />} />
                    <Route path="/mydiary_ex_4" element={<MyDiary_ex_4 />} />
                    <Route path="/mydiary_ex_5" element={<MyDiary_ex_5 />} />
                    <Route path="/mydiary_ex_6" element={<MyDiary_ex_6 />} />
                </Routes>
            </Router>
        );
    }
}
