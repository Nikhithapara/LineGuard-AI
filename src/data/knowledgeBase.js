export const troubleshootingKnowledge = [
  {
    keywords:['vibration','spindle','cnc','bearing'],
    title:'Spindle vibration — CNC Mill',
    summary:'Check tooling balance, spindle warm-up state, bearing noise, and abnormal vibration trends before increasing speed.',
    steps:[
      'Stop the machine if vibration exceeds the approved operating limit.',
      'Inspect tool holder seating and confirm tooling is balanced and undamaged.',
      'Run the approved spindle warm-up procedure and compare vibration at staged RPM levels.',
      'Check maintenance history for recent bearing, spindle, or alignment work.',
      'Escalate to maintenance engineering if vibration remains elevated.'
    ],
    source:'Approved Maintenance Guide MG-CNC-07'
  },
  {
    keywords:['sensor','photoeye','carton','packaging'],
    title:'Intermittent photoeye detection',
    summary:'Common causes include contamination, alignment drift, loose mounting, or unstable power/connectors.',
    steps:[
      'Follow line-stop and lockout requirements before physical inspection.',
      'Clean the sensor lens and reflector using the approved method.',
      'Verify alignment, mounting tightness, and connector seating.',
      'Check teach/sensitivity settings against the validated standard.',
      'Run a controlled carton test and document repeat misses.'
    ],
    source:'Packaging Line 2 Troubleshooting Standard TS-PL2-14'
  },
  {
    keywords:['hydraulic','pressure','press','leak'],
    title:'Hydraulic pressure loss',
    summary:'Pressure loss can be related to fluid temperature, leaks, filter restriction, or pump/control issues.',
    steps:[
      'Place equipment in a safe state before inspection.',
      'Check visible leaks, fluid level, and fluid temperature.',
      'Review filter differential-pressure indicator.',
      'Compare commanded pressure with actual pressure during a controlled cycle.',
      'Escalate if pump noise, contamination, or repeated pressure loss is observed.'
    ],
    source:'Press 03 Preventive Maintenance Manual PM-P03'
  },
  {
    keywords:['motor','temperature','conveyor','overheat'],
    title:'Motor temperature above baseline',
    summary:'Check loading, ventilation, bearings, electrical current, and mechanical drag.',
    steps:[
      'Compare current temperature with the equipment baseline and alarm threshold.',
      'Inspect ventilation paths and cooling fan condition.',
      'Check for abnormal bearing noise or mechanical drag.',
      'Review motor current trend and recent process-load changes.',
      'Escalate if temperature continues to rise or current exceeds approved limits.'
    ],
    source:'Conveyor Motor Standard CM-11'
  }
]
