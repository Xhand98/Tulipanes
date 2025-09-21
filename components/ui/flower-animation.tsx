export function FlowerAnimation() {
  return (
    <div className="flower-field">
      {/* Sky and grass background */}
      <div className="grass">
        {/* Animated grass blades */}
        <div className="grass-blade"></div>
        <div className="grass-blade"></div>
        <div className="grass-blade"></div>
        <div className="grass-blade"></div>
      </div>
      
      {/* Animated flower */}
      <div className="flower-container">
        <div className="flower-stem"></div>
        <div className="flower-head">
          {/* 8 petals for a full flower */}
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          
          {/* Flower center */}
          <div className="flower-center"></div>
        </div>
      </div>
    </div>
  )
}