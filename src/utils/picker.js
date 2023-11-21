export function choose(answers) {
  const results = {
    "C#": 0,
    Javascript: 0,
    Python: 0,
    Swift: 0,
    Kotlin: 0,
    "C++": 0,
    Java: 0,
  };
  if (answers.reasonOfLearning === "Interest") {
    if (answers.expirience === "Yes") {
      if (answers.field === "Frontend") {
        results.Javascript += 1;
      } else if (answers.field === "Backend") {
        results.Javascript += 0.4;
        results.Python += 0.4;
        if (answers.startup === "Yes") {
          if (answers.wayToLearn === "Easy") {
            results.Javascript += 0.4;
          } else {
            results.Python += 0.4;
          }
        } else {
          results.Javascript += 0.4;
        }
      } else if (answers.field === "Mobile") {
        results.Kotlin += 0.4;
        results.Swift += 0.4;
        if (answers.apple.includes("Phone")) {
          results.Swift += 0.5;
        } else {
          results.Kotlin += 0.5;
        }
      } else if (answers.field === "Gamedev") {
        results["C#"] += 0.4;
        results["C++"] += 0.4;
        if (answers.wayToLearn === "Easy") {
          results["C#"] += 0.3;
        } else {
          results["C++"] += 0.3;
        }
      } else if (answers.field === "Enterprise") {
        results.Swift += 0.2;
        results.Java += 0.3;
        results["C#"] += 0.3;
        if (answers.apple.includes("Phone") || answers.apple.includes("Mac")) {
          results.Swift += 0.6;
        } else if (answers.microsoft === "Yes") {
          results["C#"] += 0.5;
        } else {
          results.Java += 0.5;
        }
      }
    } else if (answers.expirience === "No") {
      results.Python += 0.2;
      results.Javascript += 0.2;
      results["C++"] += 0.1;
      if (answers.wayToLearn === "Easy") {
        results.Javascript += 0.2;
        results.Python += 0.2;
        if (answers.field === "Frontend" || answers.field === "Backend") {
          results.Javascript += 0.6;
        } else if (answers.field === "Mobile") {
          results.Kotlin += 0.4;
          results.Swift += 0.4;
          if (answers.apple.includes("Phone")) {
            results.Swift += 0.5;
          } else {
            results.Kotlin += 0.5;
          }
        } else {
          results.Python += 0.5;
        }
      } else {
        results["C++"] += 0.8;
      }
    }
  } else if (answers.reasonOfLearning == "Make money") {
    if (answers.field === "Frontend") {
      results.Javascript += 1;
    } else if (answers.field === "Backend") {
      results.Javascript += 0.4;
      results.Python += 0.4;
      if (answers.startup === "Yes") {
        if (answers.wayToLearn === "Easy") {
          results.Javascript += 0.4;
        } else {
          results.Python += 0.4;
        }
      } else {
        results.Javascript += 0.4;
      }
    } else if (answers.field === "Mobile") {
      results.Kotlin += 0.4;
      results.Swift += 0.4;
      if (answers.apple.includes("Phone")) {
        results.Swift += 0.5;
      } else {
        results.Kotlin += 0.5;
      }
    } else if (answers.field === "Gamedev") {
      results["C#"] += 0.4;
      results["C++"] += 0.4;
      if (answers.wayToLearn === "Easy") {
        results["C#"] += 0.3;
      } else {
        results["C++"] += 0.3;
      }
    } else if (answers.field === "Enterprise") {
      results.Swift += 0.2;
      results.Java += 0.3;
      results["C#"] += 0.3;
      if (answers.apple.includes("Phone") || answers.apple.includes("Mac")) {
        results.Swift += 0.6;
      } else if (answers.microsoft === "Yes") {
        results["C#"] += 0.5;
      } else {
        results.Java += 0.5;
      }
    }
  } else {
    results.Python += 1;
  }
  return results;
}
