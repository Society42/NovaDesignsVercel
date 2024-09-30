const searchInput = document.getElementById("search-input");
const articleContainer = document.getElementById("article-container");
const articleDetails = document.getElementById("article-details");
const backButton = document.createElement("div");
backButton.classList.add("back-button");
backButton.textContent = "Go back";

const articles = [
  {
    "title": "Internal Bleeding",
    "content": `
<h3>What is internal bleeding?</h3>
<p>Internal bleeding occurs when blood vessels inside the body rupture, causing blood to escape into areas where it should not be, such as organs, tissues, or body cavities. This can be caused by trauma, medical conditions like ulcers or aneurysms, or bleeding disorders. It is often harder to detect than external bleeding but can be life-threatening if not treated promptly.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Abdominal pain or swelling</li>
  <li>Bruising</li>
  <li>Dizziness or fainting</li>
  <li>Rapid pulse or low blood pressure</li>
  <li>Shortness of breath</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Administer <strong>tranexamic acid (TXA)</strong> if internal bleeding due to trauma is suspected, within 3 hours of injury (initial dose: 1g IV over 10 minutes)</li>
  <li>Monitor vital signs closely (blood pressure, heart rate, and respiratory rate)</li>
  <li>Administer oxygen if necessary</li>
  <li>Establish IV access for fluid replacement (normal saline or lactated Ringer’s)</li>
  <li>Immobilize the patient if trauma is suspected to prevent further injury</li>
  <li>Rapid transport to the nearest emergency department for surgical intervention or further diagnostics</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Avoid excessive movement to prevent worsening bleeding</li>
  <li>Be prepared to manage shock (hypovolemic shock)</li>
  <li>Reassure the patient and keep them calm, minimizing physical exertion</li>
</ul>
`,
  },   

  {
    "title": "Spinal Injuries",
    "content": `
    <h3>What are spinal injuries?</h3>
<p>Spinal injuries occur when trauma or other conditions affect the spinal cord or the surrounding bones, tissues, or blood vessels. These injuries can lead to a loss of function, such as mobility or sensation. The severity of spinal injuries can range from mild to life-threatening, potentially causing permanent disability if not treated promptly and appropriately.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Severe pain or pressure in the neck, back, or head</li>
  <li>Tingling, numbness, or loss of sensation in the hands, fingers, feet, or toes</li>
  <li>Loss of movement or muscle control in any part of the body</li>
  <li>Difficulty breathing or maintaining balance</li>
  <li>Loss of bladder or bowel control</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Immobilize the spine immediately to prevent further injury (use a cervical collar and backboard)</li>
  <li>Monitor vital signs closely (respiratory rate, heart rate, and blood pressure)</li>
  <li>Administer oxygen if necessary to support breathing</li>
  <li>Establish IV access for fluid replacement and medication if needed</li>
  <li>Prepare for rapid transport to a trauma center for advanced imaging and treatment</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Avoid moving the patient unless absolutely necessary to prevent further spinal damage</li>
  <li>Keep the patient calm and still, minimizing unnecessary movement</li>
  <li>Be cautious of spinal shock, which can cause low blood pressure and respiratory distress</li>
</ul>
`,
  },   

  {
    "title": "First-Degree Burns",
    "content": `
<h3>What are first-degree burns?</h3>
<p>First-degree burns are mild burns that affect only the outer layer of the skin, known as the epidermis. These burns are typically caused by sun exposure, brief contact with hot objects, or scalds from hot liquids. While painful, they usually heal within a few days without leaving permanent scars.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Redness of the skin</li>
  <li>Mild swelling</li>
  <li>Pain or tenderness in the affected area</li>
  <li>Dry, peeling skin as the burn heals</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Cool the burn with running cool (not cold) water for 10-15 minutes</li>
  <li>Apply a sterile, non-stick dressing if necessary</li>
  <li>Administer over-the-counter pain relief such as ibuprofen or acetaminophen</li>
  <li>Use aloe vera or moisturizing lotion to soothe the skin as it heals</li>
  <li>Advise the patient to keep the area clean and protected from the sun</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Avoid using ice or applying butter or other home remedies, as these can worsen the burn</li>
  <li>Do not break any blisters that form, as this can increase the risk of infection</li>
  <li>Monitor the burn for signs of infection, such as increased redness, swelling, or pus</li>
</ul>
`,
  },   

  {
    "title": "Second-Degree Burns",
    "content": `
<h3>What are second-degree burns?</h3>
<p>Second-degree burns, also known as partial-thickness burns, affect both the outer layer of the skin (epidermis) and the layer beneath it (dermis). These burns can result from exposure to hot liquids, fire, chemicals, or prolonged sun exposure. They are more severe than first-degree burns and often cause blisters, pain, and swelling. Proper treatment is essential to prevent infection and promote healing.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Blisters</li>
  <li>Red or splotchy skin</li>
  <li>Severe pain</li>
  <li>Swelling</li>
  <li>Wet or moist appearance on the burn area</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Cool the burn with running cool (not cold) water for 10-15 minutes</li>
  <li>Do not pop blisters, as they protect the underlying skin from infection</li>
  <li>Apply a sterile, non-stick dressing to cover the burn</li>
  <li>Administer over-the-counter pain relief such as ibuprofen or acetaminophen</li>
  <li>Keep the area elevated to reduce swelling</li>
  <li>Seek medical attention if the burn is large, on the face, hands, feet, or genitals, or shows signs of infection</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Avoid using ice, which can further damage the skin</li>
  <li>Do not apply ointments, butter, or greasy substances directly to the burn</li>
  <li>Monitor for signs of infection, such as increased redness, swelling, warmth, or pus</li>
</ul>
`,
  },  
  
  {
    "title": "Third-Degree Burns",
    "content": `
<h3>What are third-degree burns?</h3>
<p>Third-degree burns, or full-thickness burns, are the most severe burns, damaging all layers of the skin and potentially underlying tissues like muscles and bones. These burns are caused by prolonged exposure to flames, electricity, chemicals, or scalding liquids. They require immediate paramedic intervention to prevent life-threatening complications such as shock and infection.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Charred, white, or leathery skin</li>
  <li>Little to no pain due to nerve damage</li>
  <li>Severe swelling</li>
  <li>Possible exposure of deeper tissues such as muscles or bones</li>
  <li>Surrounding areas may have first- or second-degree burns</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Call for advanced medical support and rapid transport to a burn center</li>
  <li>Do not immerse the burn in water; cover with a sterile, non-stick dressing</li>
  <li>Administer high-flow oxygen, monitor airway, and manage breathing if necessary</li>
  <li>Monitor for and treat signs of shock (e.g., pale, clammy skin, rapid pulse, shallow breathing)</li>
  <li>Elevate the burned area to reduce swelling, if safe and possible</li>
  <li>Do not remove clothing stuck to the burn</li>
  <li>Initiate IV fluid replacement (e.g., lactated Ringer’s) for burn shock management if available</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Avoid applying ice or cold water to the burn, as it can worsen tissue damage</li>
  <li>Do not apply any creams, ointments, or home remedies to the burn</li>
  <li>Monitor for infection, especially in later stages of treatment</li>
</ul>
`,
  },   

  {
    "title": "Heart Attack",
    "content": `
<h3>What is a heart attack?</h3>
<p>A heart attack, or myocardial infarction, occurs when blood flow to a part of the heart muscle is blocked for a long enough time that the heart muscle is damaged or dies. This is often due to a blockage in the coronary arteries from plaque (atherosclerosis). Immediate intervention is crucial to minimize heart damage and improve outcomes.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Chest pain or discomfort (may radiate to the left arm, neck, or jaw)</li>
  <li>Shortness of breath</li>
  <li>Nausea or vomiting</li>
  <li>Lightheadedness or fainting</li>
  <li>Sweating or cold, clammy skin</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Administer **aspirin** (300 mg to 325 mg) to chew and swallow to help inhibit further clot formation</li>
  <li>Provide **oxygen** if the patient is hypoxic or experiencing significant difficulty breathing</li>
  <li>Monitor vital signs closely, including blood pressure, heart rate, and respiratory rate</li>
  <li>Prepare for potential cardiac arrest: ensure readiness to perform CPR and use an automated external defibrillator (AED) if needed</li>
  <li>Establish IV access for medication administration and fluid management</li>
  <li>Rapid transport to the nearest hospital for advanced cardiac care, such as thrombolysis or catheterization</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Avoid unnecessary movement of the patient to prevent exacerbating the condition or dislodging any clots</li>
  <li>Keep the patient calm and reassure them to minimize stress on the heart</li>
  <li>Monitor closely for signs of worsening condition or complications</li>
</ul>
`,
  },   

  {
    "title": "Stroke",
    "content": `
<h3>What is a stroke?</h3>
<p>A stroke occurs when blood flow to a part of the brain is interrupted, leading to damage or death of brain cells. This can be due to either a blockage (ischemic stroke) or bleeding (hemorrhagic stroke) in the brain. Immediate treatment is critical to minimize brain damage and improve recovery chances.</p>

<h3>Symptoms:</h3>
<p>Recognizing stroke symptoms quickly is essential for effective treatment. Use the FAST acronym to help identify the key signs of a stroke:</p>

<ul>
  <li><strong>F - Face:</strong> Ask the person to smile. Check if one side of the face droops or is numb. Does their smile appear uneven or lopsided?</li>
  <li><strong>A - Arms:</strong> Ask the person to raise both arms. Observe if one arm drifts downward or if they have difficulty lifting one arm.</li>
  <li><strong>S - Speech:</strong> Ask the person to repeat a simple sentence. Look for slurred or strange speech, or difficulty speaking or understanding.</li>
  <li><strong>T - Time:</strong> Time is critical. If the person shows any of these symptoms, call emergency services immediately. Time lost is brain lost, and prompt treatment is essential.</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Assess the time of symptom onset; it is crucial for determining treatment options</li>
  <li>Provide **oxygen** if the patient is hypoxic or shows signs of respiratory distress</li>
  <li>Monitor vital signs closely, including blood pressure, heart rate, and oxygen saturation</li>
  <li>Establish IV access for potential medication administration and fluid management</li>
  <li>Prepare for rapid transport to a stroke center for advanced care, including imaging and possible thrombolysis or other interventions</li>
  <li>Do not administer any medications unless directed by medical control</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Avoid moving the patient unnecessarily to prevent exacerbation of symptoms</li>
  <li>Be prepared to manage airway and breathing difficulties, as impaired consciousness or weakness can lead to aspiration</li>
  <li>Monitor for and address signs of increasing intracranial pressure or other complications</li>
</ul>
`,
  },  

  {
    "title": "Seizures",
    "content": `
<h3>What are seizures?</h3>
<p>A seizure is a sudden, uncontrolled electrical disturbance in the brain that can cause changes in behavior, movements, or consciousness. Seizures can be caused by various factors, including epilepsy, head trauma, infections, or metabolic imbalances. Immediate assessment and treatment are crucial to ensure patient safety and address any underlying causes.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Uncontrollable jerking movements of the arms and legs</li>
  <li>Loss of consciousness or awareness</li>
  <li>Muscle stiffness or twitching</li>
  <li>Confusion or disorientation after the seizure ends</li>
  <li>Involuntary movements or repetitive actions</li>
  <li>Possible loss of bowel or bladder control</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Ensure the patient is in a safe environment to prevent injury</li>
  <li>Do not restrain the patient or put anything in their mouth</li>
  <li>Protect the head with a soft object if possible and keep the area clear of hard or sharp objects</li>
  <li>Time the duration of the seizure. If it lasts more than 5 minutes or if another seizure follows immediately, consider administering anticonvulsant medication</li>
  <li>If indicated and under medical direction, administer **diazepam** (Valium) IV or rectally (dosage: typically 5-10 mg IV or 10-20 mg rectally), depending on the protocol and patient condition</li>
  <li>After the seizure, place the patient in the recovery position (on their side) to keep the airway clear</li>
  <li>Monitor vital signs and provide oxygen if needed</li>
  <li>Establish IV access for potential additional medication or fluid management</li>
  <li>Transport the patient to a medical facility for further evaluation and treatment, especially if this is their first seizure or if there are concerns about the underlying cause</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Avoid placing your hands near the patient’s mouth or trying to hold the tongue</li>
  <li>Be cautious of potential injuries from falls or sudden movements</li>
  <li>Watch for signs of postictal confusion or prolonged unconsciousness</li>
</ul>
`,
  },  

  {
    "title": "Anaphylaxis",
    "content": `
<h3>What is anaphylaxis?</h3>
<p>Anaphylaxis is a severe, potentially life-threatening allergic reaction that occurs rapidly after exposure to an allergen. It involves a sudden and widespread release of histamines and other chemicals from immune cells, leading to symptoms such as airway constriction, vascular collapse, and shock. Immediate treatment is essential to prevent serious complications or death.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Difficulty breathing or shortness of breath</li>
  <li>Swelling of the face, lips, tongue, or throat</li>
  <li>Hives, rash, or itching</li>
  <li>Abdominal pain, nausea, vomiting, or diarrhea</li>
  <li>Dizziness, lightheadedness, or fainting</li>
  <li>Rapid or weak pulse</li>
  <li>Loss of consciousness in severe cases</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Administer **epinephrine** (0.3-0.5 mg intramuscularly into the mid-anterolateral thigh) immediately, as it is the first-line treatment for anaphylaxis</li>
  <li>Provide supplemental oxygen if the patient shows signs of hypoxia or respiratory distress</li>
  <li>Monitor vital signs closely, including blood pressure, heart rate, and respiratory rate</li>
  <li>Establish IV access for fluid resuscitation if the patient is hypotensive or in shock</li>
  <li>Consider administering additional doses of epinephrine if symptoms do not improve within 5-15 minutes</li>
  <li>Administer antihistamines or corticosteroids if directed by medical control</li>
  <li>Transport the patient to a medical facility for further evaluation and treatment, as follow-up care is often required</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Monitor for signs of biphasic anaphylaxis (recurrence of symptoms) even after initial treatment</li>
  <li>Be prepared for airway management in case of severe swelling or respiratory distress</li>
  <li>Ensure proper documentation of the incident and treatment administered</li>
</ul>
`,
  },  

  {
    "title": "Heat Stroke",
    "content": `
<h3>What is heat stroke?</h3>
<p>Heat stroke is a severe and life-threatening condition resulting from prolonged exposure to high temperatures, often combined with dehydration. It occurs when the body's cooling mechanisms fail, leading to a dangerous increase in core body temperature. Immediate treatment is critical to prevent organ damage or death.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Core body temperature greater than 104°F (40°C)</li>
  <li>Altered mental status (confusion, agitation, or hallucinations)</li>
  <li>Hot, dry, or moist skin (lack of sweating in some cases)</li>
  <li>Rapid, shallow breathing</li>
  <li>Rapid or weak pulse</li>
  <li>Nausea or vomiting</li>
  <li>Possible seizures</li>
  <li>Loss of consciousness</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Move the patient to a cooler environment or shade as quickly as possible</li>
  <li>Remove excess clothing to facilitate cooling</li>
  <li>Begin active cooling measures such as applying cool, wet cloths to the skin, spraying with cool water, or using a fan</li>
  <li>Administer IV fluids (e.g., normal saline) for hydration and to help cool the body</li>
  <li>Provide supplemental oxygen if the patient shows signs of respiratory distress or hypoxia</li>
  <li>Monitor vital signs closely, including core temperature, heart rate, and blood pressure</li>
  <li>Consider administering antipyretics (e.g., acetaminophen) if directed by medical control</li>
  <li>Transport the patient to a medical facility for further evaluation and treatment, including possible cooling in an emergency room or hyperbaric chamber</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Be cautious of potential complications, such as organ failure or rhabdomyolysis</li>
  <li>Monitor for signs of worsening condition, including changes in mental status or persistent high body temperature</li>
  <li>Ensure proper documentation of the incident, treatment administered, and patient response</li>
</ul>
`,
  },  

  {
    "title": "Heat Exhaustion",
    "content": `
    <h3>What is heat exhaustion?</h3>
<p>Heat exhaustion is a condition caused by prolonged exposure to high temperatures, often accompanied by dehydration. It is less severe than heat stroke but can progress to it if not treated promptly. Immediate intervention is necessary to prevent the escalation into a life-threatening condition like heat stroke.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Heavy sweating</li>
  <li>Cool, moist skin with goosebumps in hot conditions</li>
  <li>Weakness or fatigue</li>
  <li>Dizziness or fainting</li>
  <li>Nausea or vomiting</li>
  <li>Headache</li>
  <li>Rapid, weak pulse</li>
  <li>Muscle cramps</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Move the patient to a cool, shaded area</li>
  <li>Have the patient lie down and elevate their legs to improve circulation</li>
  <li>Remove excess clothing to allow heat to dissipate</li>
  <li>Provide oral rehydration with water or an electrolyte solution if the patient is conscious and able to drink</li>
  <li>If the patient is not improving or showing signs of heat stroke (altered mental status, confusion, or high body temperature), begin active cooling measures (cool, wet cloths, spraying water, or using fans)</li>
  <li>Administer IV fluids (e.g., normal saline) if dehydration is severe or oral intake is not possible</li>
  <li>Monitor vital signs, including heart rate, blood pressure, and respiratory status</li>
  <li>Transport to a medical facility if symptoms do not improve or if the patient’s condition worsens</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Monitor for progression to heat stroke, indicated by confusion, loss of consciousness, or high core body temperature</li>
  <li>Avoid rapid cooling measures, which could cause shivering and increase body temperature</li>
  <li>Document the patient's condition, treatment, and response to interventions</li>
</ul>
`,
  },  

  {
    "title": "Hypothermia",
    "content": `
<h3>What is hypothermia?</h3>
<p>Hypothermia occurs when the body loses heat faster than it can produce, causing the core body temperature to drop below 95°F (35°C). It can happen due to prolonged exposure to cold environments, immersion in cold water, or inadequate clothing in cold weather. Hypothermia can be life-threatening, and immediate treatment is necessary to prevent organ failure or death.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Shivering (may be absent in severe hypothermia)</li>
  <li>Slurred speech or mumbling</li>
  <li>Slow, shallow breathing</li>
  <li>Weak pulse</li>
  <li>Clumsiness or lack of coordination</li>
  <li>Confusion or memory loss</li>
  <li>Drowsiness or fatigue</li>
  <li>Loss of consciousness (in severe cases)</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Move the patient to a warm, sheltered area, protecting them from wind and cold</li>
  <li>Remove wet clothing and cover the patient with dry, warm blankets or clothing</li>
  <li>If available, use external warming devices like heat packs (avoid placing directly on the skin) or warm blankets</li>
  <li>Provide warm, sweet fluids if the patient is conscious and able to drink</li>
  <li>Handle the patient gently to avoid inducing cardiac arrhythmias</li>
  <li>Administer warm IV fluids (e.g., normal saline) to help rewarm the body from the inside, especially in moderate to severe hypothermia</li>
  <li>Monitor core temperature, heart rate, and respiratory status closely</li>
  <li>Be prepared to provide **CPR** if necessary, as severe hypothermia can cause cardiac arrest</li>
  <li>Transport the patient to a medical facility for advanced care, including internal rewarming techniques such as heated IV fluids, airway rewarming, or hemodialysis</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Avoid rapid rewarming of extremities, as it can lead to shock or "afterdrop" (a further drop in core temperature)</li>
  <li>Be cautious of arrhythmias, particularly ventricular fibrillation, in severely hypothermic patients</li>
  <li>Document the patient’s condition, interventions, and response throughout treatment</li>
</ul>
`,
  },  

  {
    "title": "Frostbite",
    "content": `
<h3>What is frostbite?</h3>
<p>Frostbite is an injury caused by freezing of the skin and underlying tissues due to prolonged exposure to cold temperatures. It typically affects extremities such as fingers, toes, ears, and the nose. Frostbite can lead to permanent damage, and severe cases may require amputation if not treated promptly.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Cold, pale, or numb skin</li>
  <li>Hard or waxy-looking skin</li>
  <li>Discolored skin (red, white, bluish-gray, or black)</li>
  <li>Tingling or stinging sensation followed by numbness</li>
  <li>Blisters may develop in more severe cases</li>
  <li>Loss of sensation or the inability to move the affected area</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Move the patient to a warm environment to prevent further exposure to cold</li>
  <li>Remove any wet or restrictive clothing from the affected area</li>
  <li>Begin gentle rewarming of the affected area by immersing it in warm (not hot) water, ideally between 98.6°F (37°C) and 102°F (39°C), for 15-30 minutes</li>
  <li>Avoid rubbing or massaging the frostbitten area, as this can cause further damage</li>
  <li>Protect the affected area with sterile, non-adhesive dressings to prevent infection and further injury</li>
  <li>Administer pain relief, such as **ibuprofen** or **acetaminophen**, as rewarming can be painful</li>
  <li>Monitor vital signs and treat hypothermia if present, as frostbite often occurs alongside it</li>
  <li>Do not attempt to rewarm the area if there is a risk of refreezing, as this can cause more severe damage</li>
  <li>Transport the patient to a medical facility for further evaluation, possible imaging, and long-term care</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Avoid using direct heat sources like heating pads, stoves, or fires, as they can burn numb skin</li>
  <li>Be cautious of severe frostbite that may involve deeper tissues, including muscles and bones, requiring surgical intervention</li>
  <li>Document the injury, treatment, and patient response</li>
</ul>
`,
  },  

  {
    "title": "Poisoning",
    "content": `
<h3>What is poisoning?</h3>
<p>Poisoning occurs when harmful substances are ingested, inhaled, injected, or absorbed through the skin. These substances can include medications, chemicals, plants, gases, or other toxins. Poisoning can be life-threatening, and immediate intervention is crucial to prevent further harm and stabilize the patient.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Nausea, vomiting, or diarrhea</li>
  <li>Abdominal pain or cramping</li>
  <li>Confusion, altered mental status, or drowsiness</li>
  <li>Difficulty breathing or shortness of breath</li>
  <li>Chest pain or palpitations</li>
  <li>Burns or irritation around the mouth, nose, or throat (for ingested poisons)</li>
  <li>Seizures</li>
  <li>Unconsciousness in severe cases</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Identify the poison, if possible, by asking the patient, family members, or witnesses</li>
  <li>Call a Poison Control Center for guidance or follow local protocols for specific toxins</li>
  <li>If the patient is conscious and able to swallow, consider administering **activated charcoal** to limit the absorption of certain poisons (based on local protocol)</li>
  <li>Provide supplemental oxygen if the patient shows signs of respiratory distress or hypoxia</li>
  <li>Monitor vital signs closely, including respiratory rate, heart rate, and blood pressure</li>
  <li>Establish IV access for fluid resuscitation or medication administration</li>
  <li>Administer antidotes if available and indicated (e.g., **naloxone** for opioid overdose, **atropine** for certain chemical poisonings)</li>
  <li>For inhaled poisons, remove the patient from the contaminated area and provide fresh air or oxygen</li>
  <li>For skin exposure, remove contaminated clothing and wash the skin thoroughly with water</li>
  <li>Transport the patient to a medical facility for further evaluation and possible toxicology treatment</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Avoid inducing vomiting unless instructed by medical control, as it can cause additional harm</li>
  <li>Use caution in handling any potentially toxic materials to avoid personal exposure</li>
  <li>Document the substance, route of exposure, symptoms, and any treatments administered</li>
</ul>
`,
  },  

  {
    "title": "Carbon Monoxide Poisoning",
    "content": `
<h3>What is carbon monoxide poisoning?</h3>
<p>Carbon monoxide (CO) poisoning occurs when carbon monoxide gas is inhaled. This colorless, odorless gas binds to hemoglobin in the blood, preventing oxygen from being delivered to vital organs. Prolonged exposure or high levels of CO can lead to severe hypoxia, organ failure, and death. Prompt identification and treatment are critical.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Headache (often described as a dull headache)</li>
  <li>Dizziness or lightheadedness</li>
  <li>Nausea or vomiting</li>
  <li>Confusion or altered mental status</li>
  <li>Shortness of breath or difficulty breathing</li>
  <li>Chest pain</li>
  <li>Weakness or fatigue</li>
  <li>Loss of consciousness (in severe cases)</li>
  <li>Seizures (in extreme cases)</li>
  <li>Cherry-red skin (though this is rare and usually seen in severe cases)</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Immediately move the patient to fresh air and away from the source of CO exposure</li>
  <li>Administer 100% oxygen via a non-rebreather mask or bag-valve mask to help displace carbon monoxide from hemoglobin</li>
  <li>Monitor vital signs closely, including oxygen saturation (though pulse oximeters can give falsely normal readings in CO poisoning, so rely on clinical signs)</li>
  <li>Establish IV access for fluid resuscitation or medication administration, as needed</li>
  <li>Consider the use of **hyperbaric oxygen therapy** (if available and indicated) for severe CO poisoning or prolonged exposure</li>
  <li>Provide respiratory support, including ventilation if the patient is in respiratory distress or unconscious</li>
  <li>Monitor for and treat complications such as seizures or arrhythmias</li>
  <li>Transport the patient to a medical facility for further evaluation and potential hyperbaric oxygen treatment</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Use caution to avoid personal exposure to carbon monoxide; ensure the scene is safe before approaching</li>
  <li>Be aware of falsely normal oxygen saturation readings due to CO’s interference with pulse oximetry</li>
  <li>Document the source of CO exposure, symptoms, treatments, and patient response</li>
</ul>
`,
  },  

  {
    "title": "Electric shock",
    "content": `
<h3>What is electric shock?</h3>
<p>Electric shock occurs when a person comes into contact with an electrical current, leading to injury. The severity of the shock can range from mild to life-threatening, depending on the voltage, current, and duration of exposure. Electric shock can cause burns, cardiac arrest, and internal injuries, so immediate medical care is essential.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Burns at the entry and exit points of the electrical current</li>
  <li>Muscle pain, weakness, or paralysis</li>
  <li>Irregular or rapid heartbeat (arrhythmias)</li>
  <li>Seizures</li>
  <li>Loss of consciousness</li>
  <li>Difficulty breathing or respiratory arrest</li>
  <li>Confusion or altered mental status</li>
  <li>Visible wounds or fractures from forceful muscle contractions</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Ensure the scene is safe by confirming that the power source has been turned off before approaching the patient</li>
  <li>Check for responsiveness and initiate **CPR** if the patient is unresponsive and not breathing</li>
  <li>Provide **AED** support if the patient is in cardiac arrest and follow defibrillation protocols</li>
  <li>Administer **100% oxygen** if the patient is breathing but showing signs of respiratory distress</li>
  <li>Assess for burns and treat as necessary with sterile, non-adhesive dressings</li>
  <li>Monitor vital signs closely, paying particular attention to heart rhythm and respiratory status</li>
  <li>Establish **IV access** for fluid resuscitation, especially if the patient has burns or signs of shock</li>
  <li>Be prepared to treat arrhythmias or other complications such as seizures with appropriate medications</li>
  <li>Transport the patient to a medical facility for further evaluation and advanced care</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Avoid handling the patient until you are sure the power source is deactivated</li>
  <li>Monitor for potential spinal injuries, especially if the patient has fallen or been thrown by the electrical current</li>
  <li>Document the type of electrical exposure, entry and exit points, symptoms, and treatment provided</li>
</ul>
`,
  },  

  {
    "title": "Concussion",
    "content": `
<h3>What is a concussion?</h3>
<p>A concussion is a mild traumatic brain injury (TBI) caused by a blow to the head or a sudden jolt that causes the brain to move within the skull. Although considered mild, concussions can lead to significant symptoms and should be monitored closely. Immediate medical evaluation is necessary to assess for more severe brain injury.</p>

<h3>Symptoms:</h3>
<ul>
  <li>Headache or pressure in the head</li>
  <li>Dizziness or balance problems</li>
  <li>Nausea or vomiting</li>
  <li>Confusion or difficulty concentrating</li>
  <li>Memory loss (amnesia) surrounding the event</li>
  <li>Blurred or double vision</li>
  <li>Light or noise sensitivity</li>
  <li>Loss of consciousness (though not required for a concussion)</li>
  <li>Fatigue or feeling sluggish</li>
  <li>Irritability or mood changes</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Ensure the patient’s airway, breathing, and circulation (ABCs) are intact</li>
  <li>Advise the patient to rest and avoid physical and mental exertion until cleared by a healthcare provider</li>
  <li>Administer pain relief (e.g., **acetaminophen**) for headache, avoiding NSAIDs like ibuprofen or aspirin due to the risk of bleeding</li>
  <li>Monitor for any signs of deteriorating neurological status, such as increased confusion, worsening headache, repeated vomiting, or loss of consciousness</li>
  <li>Perform a full neurological assessment, including checking pupil reactions, motor strength, and orientation</li>
  <li>Keep the patient calm and reassure them throughout the assessment and treatment process</li>
  <li>If there are concerns about potential spinal injuries, immobilize the neck and spine until ruled out</li>
  <li>Transport the patient to a medical facility for further evaluation and imaging if necessary</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Avoid giving the patient medication that could mask worsening symptoms (such as strong sedatives)</li>
  <li>Be cautious of delayed symptoms that could indicate a more severe injury (such as a brain bleed)</li>
  <li>Document the mechanism of injury, patient’s symptoms, any treatments provided, and changes in condition</li>
</ul>
`,
  },  

  {
    "title": "Skull fracture",
    "content": `
<h3>What is a skull fracture?</h3>
<p>A skull fracture is a break in one or more of the bones in the skull, usually caused by a significant impact or trauma. Skull fractures can be associated with brain injuries and may result in bleeding, swelling, or other complications. Immediate treatment is crucial to prevent further damage.</p>

<h3>Types of Skull Fractures:</h3>
<ul>
  <li><strong>Linear fracture:</strong> A simple break in the bone without displacement.</li>
  <li><strong>Depressed fracture:</strong> Part of the skull is pushed inward, potentially compressing the brain.</li>
  <li><strong>Basilar fracture:</strong> A fracture at the base of the skull, often associated with cerebrospinal fluid (CSF) leakage.</li>
  <li><strong>Comminuted fracture:</strong> The skull is shattered into multiple pieces.</li>
</ul>

<h3>Symptoms:</h3>
<ul>
  <li>Visible head injury or swelling</li>
  <li>Bleeding from the wound, ears, nose, or mouth</li>
  <li>Bruising around the eyes (raccoon eyes) or behind the ears (Battle's sign)</li>
  <li>Clear fluid (CSF) leaking from the nose or ears</li>
  <li>Confusion or altered mental status</li>
  <li>Loss of consciousness</li>
  <li>Severe headache</li>
  <li>Nausea or vomiting</li>
  <li>Seizures</li>
</ul>

<h3>Treatment:</h3>
<ul>
  <li>Ensure the patient’s airway, breathing, and circulation (ABCs) are intact</li>
  <li>Immobilize the patient’s neck and spine if a spinal injury is suspected</li>
  <li>Control bleeding by applying sterile dressings, but avoid direct pressure on obvious fractures</li>
  <li>Administer oxygen to maintain adequate oxygenation</li>
  <li>Monitor vital signs and neurological status closely, checking for signs of deteriorating consciousness or abnormal pupils</li>
  <li>Do not attempt to remove any foreign objects embedded in the skull</li>
  <li>If cerebrospinal fluid (CSF) leakage is suspected, cover the area with sterile gauze without applying pressure</li>
  <li>Administer pain relief if needed, but avoid sedatives that could mask neurological changes</li>
  <li>Prepare for rapid transport to a trauma center for imaging and potential surgical intervention</li>
</ul>

<h3>Hazard:</h3>
<ul>
  <li>Avoid excessive movement or manipulation of the head, as it could worsen the injury</li>
  <li>Be cautious of potential brain injuries, including intracranial bleeding, and monitor for signs of increased intracranial pressure (e.g., vomiting, unequal pupils, bradycardia)</li>
  <li>Document the mechanism of injury, the patient’s symptoms, and any changes in condition</li>
</ul>
`,
  },  
  ];

  function displayArticles(articlesToShow) {
    const noResultsMessage = document.querySelector('.no-results');
    noResultsMessage.style.display = "none";

    articleContainer.innerHTML = "";
    articlesToShow.forEach((article, index) => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article");
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.content.substring(0, 100)}...</p>
        `;
        articleElement.addEventListener("click", function () {
            displayArticleDetails(articles.indexOf(article)); 
            updateURL(articles.indexOf(article)); 
        });
        articleContainer.appendChild(articleElement);
    });

    if (articlesToShow.length === 0) {
        noResultsMessage.style.display = "block";
    }
}


  

function displayArticleDetails(index) {
    const article = articles[index];
    articleDetails.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.content}</p>
    `;
    articleDetails.style.display = "block";
    articleContainer.style.display = "none";
    articleDetails.appendChild(backButton);
}

backButton.addEventListener("click", function() {
    articleDetails.style.display = "none";
    articleContainer.style.display = "block";
    updateURL();
});

searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm) ||
        article.content.toLowerCase().includes(searchTerm)
    );
    displayArticles(filteredArticles);
    updateURL();
});

function updateURL(index) {
    const articleId = index !== undefined ? index + 1 : "";
    const url = window.location.origin + window.location.pathname + (articleId ? `?article=${articleId}` : "");
    window.history.pushState({}, "", url);
}

function getArticleIndexFromURL() {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("article");
    return articleId ? parseInt(articleId) - 1 : null;
}

displayArticles(articles);

const articleIndexFromURL = getArticleIndexFromURL();
if (articleIndexFromURL !== null && articleIndexFromURL >= 0 && articleIndexFromURL < articles.length) {
    displayArticleDetails(articleIndexFromURL);
}

