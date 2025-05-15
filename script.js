import { quiz } from "./questions.js";

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


let perguntaAtual = 0;
let respostasUsuario = Array(quiz.length).fill(null);
let pontuacao = 0;
let tempoRestante = 1200; 
let timer;

let quizEmbaralhado = embaralharArray([...quiz]); // copia e embaralha o array original
let perguntasIniciais = quizEmbaralhado.slice(0, 10);
let perguntasExtras = quizEmbaralhado.slice(10, 51);
let quizAtivo = perguntasIniciais;

window.iniciarQuiz = function() {
  quizAtivo = perguntasIniciais; 
  perguntaAtual = 0;
  document.getElementById("quiz-container").classList.remove("hidden");
  document.getElementById("btn-voltar").classList.add("hidden");
  document.getElementById("btn-começar").textContent = "Reiniciar Quiz";
  document.getElementById("btn-começar").addEventListener("click", reiniciarQuiz);
  document.getElementById("btn-continuar").style.display = "none"; 
  document.getElementById("btn-avancar").style.display = "block"; 
  mostrarPergunta()
  iniciarTimer();

  window.continuarQuiz = function() {//função para limitar quantidade de perguntas
  quizAtivo = perguntasExtras;
  perguntaAtual = 0;
  document.getElementById("btn-continuar").style.display = "none";
  document.getElementById("btn-avancar").style.display = "block";
  document.getElementById("btn-voltar").classList.add("hidden");  
  mostrarPergunta();
};
  mostrarPergunta();
  if (quizAtivo === perguntasIniciais && perguntaAtual === perguntasIniciais.length - 1) {
  document.getElementById("btn-continuar").style.display = "block";
} else {
  document.getElementById("btn-continuar").style.display = "none";
}

};
  iniciarTimer();
  document.getElementById("btn-continuar").style.display = "none";


function mostrarPergunta() {
  const q = quizAtivo[perguntaAtual];
  const quizElement = document.getElementById("quiz");
 
  document.getElementById("contador").textContent = `Pergunta ${perguntaAtual + 1} de ${quizAtivo.length}`;
  document.getElementById("progress-bar").style.width = `${(perguntaAtual / quizAtivo.length) * 100}%`;
  
  quizElement.innerHTML = `
    <div class="bg-gray-700 p-6 rounded-lg">
      <p class="font-bold text-xl mb-4">${q.pergunta}</p>
      <div class="space-y-3">
        ${q.opcoes.map((op, i) => `
          <label class="flex items-start gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-600 transition ${respostasUsuario[perguntaAtual] === i ? 'bg-gray-600' : ''}">
            <input type="radio" name="pergunta" value="${i}" class="mt-1"
              ${respostasUsuario[perguntaAtual] === i ? 'checked' : ''} 
              onchange="registrarResposta(${i})">
            <span>${String.fromCharCode(65 + i)}. ${op}</span>
          </label>
        `).join('')}
      </div>
    </div>
    <div class="mt-4 text-sm text-gray-400">
      <i class="fas fa-clock mr-2"></i>Tempo restante: <span id="tempo">20:00</span>
    </div>
  `;

  if (respostasUsuario[perguntaAtual] !== null) {
    mostrarFeedback();
  }
}
function mostrarConfirmacaoContinuar() {
  const quizElement = document.getElementById("quiz");
  quizElement.innerHTML = `
    <div class="text-center p-6 bg-gray-700 rounded-lg">
      <h3 class="text-xl font-bold mb-4">Você gostaria de continuar o quiz com mais perguntas?</h3>
      <div class="flex justify-center gap-4">
        <button onclick="continuarQuiz()" class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-bold">
          Sim, continuar
        </button>
        <button onclick="finalizarParcial()" class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-bold">
          Não, finalizar
        </button>
      </div>
    </div>
  `;
  document.getElementById("btn-voltar").classList.add("hidden");
  document.getElementById("btn-avancar").style.display = "none";
  document.getElementById("btn-continuar").style.display = "none";
}



window.avancarPergunta = function() {
  if (perguntaAtual < quizAtivo.length - 1) {
    perguntaAtual++;
    document.getElementById("btn-voltar").classList.remove("hidden");
    document.getElementById("btn-avancar").addEventListener("click", esconderFeedback);
    mostrarPergunta();
  } else if (quizAtivo === perguntasIniciais) {
    
   mostrarConfirmacaoContinuar();

  } else {
    calcularResultado();
  }
};

    function iniciarTimer() {//relogio 
      clearInterval(timer);
      timer = setInterval(() => {
        tempoRestante--;
        const minutos = Math.floor(tempoRestante / 60);
        const segundos = tempoRestante % 60;
         //mostrador de tempo
        document.getElementById("tempo").textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
        
        if(tempoRestante <= 0) {
          clearInterval(timer);
          calcularResultado();
        }
      }, 1000);
    }

     window.registrarResposta = function (opcao) {
      respostasUsuario[perguntaAtual] = opcao;
      mostrarFeedback();
    }
    //utiliza a div com id="feedback" para indicar respostas corretas e incorretas
    function mostrarFeedback() { 
      const feedback = document.getElementById("feedback");
      const q = quiz[perguntaAtual];
      const respostaUsuario = respostasUsuario[perguntaAtual];
      
      if(respostaUsuario !== null) {
        feedback.classList.remove("hidden");
        
        if(respostaUsuario === q.resposta) {
          feedback.className = "bg-green-900/50 border border-green-400 text-green-100 p-4 rounded-lg mt-4";
          feedback.innerHTML = `
            <p class="font-bold flex items-center gap-2">
              <i class="fas fa-check-circle"></i> Resposta Correta!
            </p>
            <p class="mt-2">${q.explicacao}</p>
          `;
        } else {
          feedback.className = "bg-red-900/50 border border-red-400 text-red-100 p-4 rounded-lg mt-4";
          feedback.innerHTML = `
            <p class="font-bold flex items-center gap-2">
              <i class="fas fa-times-circle"></i> Resposta Incorreta
            </p>
            <p class="mt-2">A resposta correta é: <strong>${String.fromCharCode(65 + q.resposta)}. ${q.opcoes[q.resposta]}</strong></p>
            <p class="mt-2">${q.explicacao}</p>
          `;
        }
      }
    }

    window.esconderFeedback = function(){ //função global para esconder feedback 
      document.getElementById("feedback").classList.add("hidden");
    }


    window.voltarPergunta = function() {
      if(perguntaAtual > 0) {
        perguntaAtual--;
        //acionando função esconderFeedback quando o usuario clicar em voltar para questão anterior
        document.getElementById("btn-voltar").addEventListener("click",esconderFeedback);
        if(perguntaAtual === 0) {
          document.getElementById("btn-voltar").classList.add("hidden");
        }
        mostrarPergunta();
        document.getElementById("btn-avancar").innerHTML = 'Próxima <i class="fas fa-arrow-right ml-2"></i>';
      }
    }

    function calcularResultado() {
      clearInterval(timer);
      pontuacao = respostasUsuario.filter((resposta, i) => resposta === quiz[i].resposta).length;
      const porcentagem = Math.round((pontuacao / quiz.length) * 100);
      
      //inserindo conteudo html
      const resultadoHTML = `
        <div class="text-center p-6 bg-gray-700 rounded-lg">
          <h3 class="text-2xl font-bold mb-4">Seu Resultado</h3>
          <div class="text-4xl font-extrabold mb-6 ${porcentagem >= 70 ? 'text-green-400' : porcentagem >= 40 ? 'text-yellow-400' : 'text-red-400'}">
            ${pontuacao}/${quiz.length} (${porcentagem}%)
          </div>
          
          ${porcentagem >= 85 ? `
            <p class="text-green-300 text-lg">Excelente! Você demonstrou conhecimento avançado em cibersegurança.</p>
          ` : porcentagem >= 60 ? `
            <p class="text-yellow-300 text-lg">Bom trabalho! Você tem uma base sólida, mas pode melhorar.</p>
          ` : `
            <p class="text-red-300 text-lg">Continue estudando! Revise os conceitos para melhorar sua proteção digital.</p>
          `}
          
          <div class="mt-6 grid md:grid-cols-2 gap-4">
            <button onclick="reiniciarQuiz()" id="btn-reiniciar" class="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg font-bold transition">
              <i class="fas fa-redo mr-2"></i>Refazer Quiz
            </button>
            <button onclick="verRespostas()" class="bg-gray-600 hover:bg-gray-500 px-4 py-3 rounded-lg font-bold transition">
              <i class="fas fa-list-ol mr-2"></i>Ver Todas Respostas
            </button>
          </div>
        </div>
      `;
      
      document.getElementById("quiz").innerHTML = resultadoHTML;
      document.getElementById("feedback").classList.add("hidden");
      document.getElementById("btn-voltar").classList.add("hidden");
      document.getElementById("btn-avancar").classList.add("hidden");
    }
    window.finalizarParcial = function () {
  clearInterval(timer);
  // Calcula a pontuação apenas com as perguntas iniciais
  pontuacao = respostasUsuario.slice(0, perguntasIniciais.length)
    .filter((resposta, i) => resposta === perguntasIniciais[i].resposta).length;
  const porcentagem = Math.round((pontuacao / perguntasIniciais.length) * 100);

  const resultadoHTML = `
    <div class="text-center p-6 bg-gray-700 rounded-lg">
      <h3 class="text-2xl font-bold mb-4">Seu Resultado</h3>
      <div class="text-4xl font-extrabold mb-6 ${porcentagem >= 70 ? 'text-green-400' : porcentagem >= 40 ? 'text-yellow-400' : 'text-red-400'}">
        ${pontuacao}/${perguntasIniciais.length} (${porcentagem}%)
      </div>
      <p class="text-gray-300 text-lg mb-6">Você finalizou apenas a primeira parte do quiz.</p>
      <button onclick="reiniciarQuiz()" id="btn-reinciar" class="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg font-bold transition">
        <i class="fas fa-redo mr-2"></i> Refazer Quiz
      </button>
    </div>
  `;
  document.getElementById("quiz").innerHTML = resultadoHTML;
  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("btn-voltar").classList.add("hidden");
  document.getElementById("btn-avancar").classList.add("hidden");
};


    window.verRespostas = function() {
      let respostasHTML = `
        <div class="text-left space-y-6">
          <h3 class="text-xl font-bold mb-4">Respostas Detalhadas</h3>
      `;
      
      quiz.forEach((q, i) => {
        const respostaUsuario = respostasUsuario[i];
        const classeCor = respostaUsuario === q.resposta ? 'text-green-400' : 'text-red-400';
        
        respostasHTML += `
          <div class="bg-gray-700 p-4 rounded-lg">
            <p class="font-bold mb-2">${i + 1}. ${q.pergunta}</p>
            <p class="${classeCor} mb-2">
              <i class="fas ${respostaUsuario === q.resposta ? 'fa-check' : 'fa-times'} mr-2"></i>
              Sua resposta: ${respostaUsuario !== null ? String.fromCharCode(65 + respostaUsuario) + '. ' + q.opcoes[respostaUsuario] : 'Não respondida'}
            </p>
            <p class="text-green-400">
              <i class="fas fa-check-circle mr-2"></i>
              Resposta correta: ${String.fromCharCode(65 + q.resposta)}. ${q.opcoes[q.resposta]}
            </p>
            <p class="mt-2 text-sm text-gray-300">${q.explicacao}</p>
          </div>
        `;
      });
      
      respostasHTML += `</div>`;
      document.getElementById("quiz").innerHTML = respostasHTML;
    }
    
    window.reiniciarQuiz = function() {
      perguntaAtual = 0;
      respostasUsuario = Array(quiz.length).fill(null);// reinicia as respostas do usuario
      pontuacao = 0;
      tempoRestante = 1200;
      iniciarQuiz();
      // removendo o atributo invisivel da div
      document.getElementById("btn-avancar").classList.remove("hidden");
      // adicionando o atributo invisivel para a div feedback
      document.getElementById("feedback").classList.add("hidden");
      
    }
