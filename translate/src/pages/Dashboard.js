import React from 'react';
import '../index.css';
function Dashboard(props) {
    console.log("Dashboard props", props);
    return (
        <div className="dash" >
        <div class="row">
    <div class="column">
<div className="topset">
    <div className="center">
      <p class="point">English/Singlish</p>
<input type="text" class="rounded" />
</div>
</div>

    </div>
    <div class="column" >



    <p class="point">English</p>
<input type="text" class="rounded" />
<p class="point">Sinhala</p>
<input type="text" class="rounded" />
    </div>
  </div>


        </div>
    );
}

export default Dashboard;
