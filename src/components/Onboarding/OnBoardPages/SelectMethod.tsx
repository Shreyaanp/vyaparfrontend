import React, { FunctionComponent, useMemo, CSSProperties } from "react";
import styles from "../OnBoardPages/SelectMethod.css";
import voiceImg from "../../../images/SelectMethod/group-1000004811.svg";

// GroupComponent.tsx or wherever your types are defined

export type GroupComponentType = {
  className?: string;
  voiceFirst?: string;
  useVoiceFeatureToInputYou?: string;
  group1000004811?: string;
  group?: "voice" | "onboarding";

  // Style props
  propFlex?: CSSProperties["flex"];

  // Action props
  onGroupClick: (group: "voice" | "onboarding") => void; // Note the change here
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  voiceFirst,
  useVoiceFeatureToInputYou,
  group1000004811,
  propFlex,
  onGroupClick,
  group,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const handleClick = () => {
    if (onGroupClick && group) {
      onGroupClick(group);
    }
  };

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} />
      <div className={styles.voiceInputContent}>
        <div className={styles.voiceOptions}>
          <b className={styles.voiceFirst}>{voiceFirst}</b>
        </div>
        <div className={styles.useVoiceFeature}>
          {useVoiceFeatureToInputYou}
        </div>
      </div>
      <div className={styles.manualInputContent}>
        <div className={styles.wrapperGroup1000004811}>
          <img
            className={styles.wrapperGroup1000004811Child}
            loading="lazy"
            alt=""
            src={group1000004811}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

// Define the prop type for SelectMethod
type SelectMethodProps = {
  onGroupClick: (group: "voice" | "onboarding") => void;
};

// Root component definition
const SelectMethod: FunctionComponent<SelectMethodProps> = ({ onGroupClick }) => {
  return (
    <div className={styles.root}>
      <div className={styles.base} />
      <div className={styles.rootInner}>
        <div className={styles.vyaparLaunchpadParent}>
          <b className={styles.vyaparLaunchpad}>
            <span>Vya</span>
            <span className={styles.par}>par</span>
            <span> Launch</span>
            <span className={styles.pad}>pad</span>
          </b>
          <div className={styles.frameChild} />
        </div>
      </div>
      <section className={styles.frameParent}>
        <GroupComponent
          voiceFirst="Voice First"
          useVoiceFeatureToInputYou="Use voice feature to input your shop details."
          group1000004811={voiceImg}
          group="voice"
          onGroupClick={onGroupClick} // Ensure onGroupClick is passed here
        />
        <GroupComponent
          voiceFirst="Input Shop Details"
          useVoiceFeatureToInputYou="Input your shop details manually by keyboard."
          group1000004811={voiceImg}
          propFlex="1"
          group="onboarding"
          onGroupClick={onGroupClick} // Ensure onGroupClick is passed here
        />
      </section>
    </div>
  );
};

export default SelectMethod;
