export function simulateCode(courseId: string, execCode: string): string {
  const logs: string[] = [];
  const fakeConsole = {
    log: (...args: any[]) => logs.push(args.map(String).join(' ')),
    warn: (...args: any[]) => logs.push('⚠️ ' + args.map(String).join(' ')),
    error: (...args: any[]) => logs.push('❌ ' + args.map(String).join(' ')),
  };

  if (courseId === 'sql') {
    // Simple SQL simulation
    if (execCode.trim().length > 0) {
      logs.push(`[SQL Executed] \n${execCode}`);
      if (execCode.toUpperCase().includes('SELECT')) {
        logs.push('\n| id | name  | age |');
        logs.push('|----|-------|-----|');
        logs.push('| 1  | Alice | 25  |');
        logs.push('| 2  | Budi  | 20  |');
      } else {
        logs.push('\nQuery OK, 1 row affected.');
      }
    } else {
      logs.push('No query provided.');
    }
  } else if (courseId === 'tailwind') {
    // Tailwind string matching simulator
    if (execCode.trim().length > 0) {
      logs.push(`[Tailwind Validation]`);
      // Extract class="something" from the code using regex
      const classMatch = execCode.match(/class=["'](.*?)["']/);
      if (classMatch && classMatch[1]) {
        const classes = classMatch[1];
        logs.push(`Detected classes: "${classes}"`);
        logs.push(`\nRender Simulated OK!`);
      } else {
        logs.push(`No class attribute found or it is empty.`);
      }
    } else {
      logs.push('No code provided.');
    }
  } else if (courseId === 'nodejs') {
    // Node.js mock simulator
    if (execCode.trim().length > 0) {
      logs.push(`[Node.js Server Simulation]`);
      if (execCode.includes('app.listen')) {
        logs.push(`Server started and listening for connections...`);
      } else if (execCode.includes('app.get') || execCode.includes('app.post') || execCode.includes('app.put') || execCode.includes('app.delete')) {
        logs.push(`Route registered successfully.`);
        if (execCode.includes('res.json')) {
          logs.push(`(Simulating Request) -> Responded with JSON object.`);
        } else if (execCode.includes('res.send')) {
          logs.push(`(Simulating Request) -> Responded with text/html.`);
        }
      } else {
        logs.push(`Code executed without server crashes.`);
      }
    } else {
      logs.push('No code provided.');
    }
  } else if (courseId === 'git') {
    // Git Mock Simulator
    if (execCode.trim().length > 0) {
      logs.push(`$ ${execCode.trim()}`);
      if (execCode.startsWith('git init')) {
        logs.push(`Initialized empty Git repository in /project/.git/`);
      } else if (execCode.startsWith('git add')) {
        logs.push(`Files staged successfully.`);
      } else if (execCode.startsWith('git commit')) {
        logs.push(`[main (root-commit)] 1 file changed, 1 insertion(+)`);
      } else if (execCode.startsWith('git branch')) {
        logs.push(`Branch created/listed.`);
      } else if (execCode.startsWith('git checkout') || execCode.startsWith('git switch')) {
        logs.push(`Switched to branch successfully.`);
      } else if (execCode.startsWith('git merge')) {
        logs.push(`Updating... Fast-forward. Merge successful.`);
      } else if (execCode.startsWith('git clone')) {
        logs.push(`Cloning into repository... done.`);
      } else if (execCode.startsWith('git push')) {
        logs.push(`Enumerating objects: 5, done.\nWriting objects: 100% (3/3), done.\nTo https://github.com/... \n * [new branch] main -> main`);
      } else if (execCode.startsWith('git pull')) {
        logs.push(`Updating... \n1 file changed, 3 insertions(+)\nFast-forward`);
      } else {
        logs.push(`bash: command not found or not simulated`);
      }
    } else {
      logs.push('No command provided.');
    }
  } else if (courseId === 'python') {
    // Python Mock Simulator
    if (execCode.trim().length > 0) {
      if (execCode.includes('if ') && !execCode.includes(':')) {
         logs.push(`SyntaxError: expected ':'`);
      } else if (execCode.includes('for ') && !execCode.includes(':')) {
         logs.push(`SyntaxError: expected ':'`);
      } else if (execCode.includes('while ') && !execCode.includes(':')) {
         logs.push(`SyntaxError: expected ':'`);
      } else if (execCode.includes('def ') && !execCode.includes(':')) {
         logs.push(`SyntaxError: expected ':'`);
      } else {
         logs.push(`[Python Simulator Executed]`);
         const printMatches = execCode.match(/print\((["']?)(.*?)\1\)/g);
         if (printMatches) {
           printMatches.forEach(match => {
             const innerContent = match.replace(/print\((["']?)(.*?)\1\)/, '$2');
             logs.push(`> ${innerContent}`);
           });
         } else {
             logs.push(`(No output)`);
         }
         logs.push(`\nProcess finished with exit code 0`);
      }
    } else {
      logs.push('No code provided.');
    }
  } else if (courseId === 'reactnative') {
    // React Native Mock Simulator
    if (execCode.trim().length > 0) {
      logs.push(`[React Native Simulator] Compiling...`);
      if (execCode.includes('<View') || execCode.includes('<Text') || execCode.includes('<Button') || execCode.includes('<TextInput')) {
         logs.push(`UI Components detected.`);
         if (execCode.includes('flex: 1')) logs.push(`> Applied layout: flex-1 (fills screen)`);
         if (execCode.includes('flexDirection')) logs.push(`> Applied flex direction`);
         const textMatches = execCode.match(/<Text.*?>(.*?)<\/Text>/);
         if (textMatches && textMatches[1]) {
            logs.push(`> Rendered Text: "${textMatches[1]}"`);
         }
         if (execCode.includes('<Button')) {
            logs.push(`> Rendered Button component`);
         }
         logs.push(`\n✅ Render Simulated Successfully`);
      } else if (execCode.includes('StyleSheet.create')) {
         logs.push(`Styles compiled successfully.`);
      } else {
         logs.push(`No recognized React Native components rendered.`);
      }
    } else {
      logs.push('No code provided.');
    }
  } else if (courseId === 'typescript') {
    // TypeScript Mock Simulator
    if (execCode.trim().length > 0) {
      logs.push(`[TypeScript Compiler] Compiling...`);
      // Mock some type errors
      if (execCode.includes('poin = "seratus"') || execCode.includes("score = 'A+'")) {
        logs.push(`❌ TS2322: Type 'string' is not assignable to type 'number'.`);
      } else if (execCode.includes('let bahasa = "TypeScript"')) {
        logs.push(`⚠️ Warning: Type inference used. Consider adding explicit type like 'let bahasa: string'.`);
        logs.push(`✅ Compiled successfully with warnings.`);
      } else if (execCode.includes('interface') || execCode.includes('type ') || execCode.includes(': string') || execCode.includes(': number') || execCode.includes(': boolean')) {
        logs.push(`Type definitions recognized.`);
        logs.push(`✅ 0 errors found. Compiled successfully.`);
      } else {
        logs.push(`✅ Compiled successfully (Treated as plain JavaScript).`);
      }
    } else {
      logs.push('No code provided.');
    }
  } else if (courseId === 'laravel' || execCode.includes('<?php')) {
    // For PHP, we simulate output
    const echoMatch = execCode.match(/echo\s+["'](.+?)["']/g);
    if (echoMatch) {
      echoMatch.forEach((m) => {
        const text = m.replace(/echo\s+["']/, '').replace(/["'];?$/, '');
        logs.push(text);
      });
    }
    if (logs.length === 0) {
      logs.push('// PHP code — output simulated');
      logs.push('// In real Laravel, this runs on a server');
    }
  } else {
    // Run JavaScript
    const fn = new Function('console', 'alert', 'document', execCode);
    fn(fakeConsole, (msg: string) => logs.push(`Alert: ${msg}`), {
      write: (s: string) => logs.push(s),
      getElementById: () => ({ innerHTML: '' }),
    });
  }

  return logs.join('\n') || '(no output)';
}
