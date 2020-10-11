import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image=" https://pbs.twimg.com/profile_images/1055655725622616065/Kym4GjrI_400x400.jpg"
        profileSrc=" https://pbs.twimg.com/profile_images/1055655725622616065/Kym4GjrI_400x400.jpg"
        title="Saujanya Raj Shrestha"
      />
        <Story
        image=" https://www.thehealthybrandcompany.com/wp-content/uploads/2020/03/dreamstime_m_158561957.jpg"
        profileSrc=" https://pbs.twimg.com/profile_images/1055655725622616065/Kym4GjrI_400x400.jpg"
        title="Saujanya Raj Shrestha"
      />
        <Story
        image=" data:image/jpeg;base64,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"
        profileSrc=" https://pbs.twimg.com/profile_images/1055655725622616065/Kym4GjrI_400x400.jpg"
        title="Saujanya Raj Shrestha"
      />
        <Story
        image=" https://pbs.twimg.com/profile_images/1055655725622616065/Kym4GjrI_400x400.jpg"
        profileSrc=" https://pbs.twimg.com/profile_images/1055655725622616065/Kym4GjrI_400x400.jpg"
        title="Saujanya Raj Shrestha"
      />
    </div>
  );
}

export default StoryReel;