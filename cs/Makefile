export TEXINPUTS=../tex//:

all: prace.pdf abstrakt.pdf

# LaTeX je potreba spustit nekolikrat, aby spravne spocital odkazy
prace.pdf: prace.tex $(wildcard *.tex) literatura.bib prace.xmpdata
	pdflatex -output-directory=build $<
	bibtex build/prace
	pdflatex -output-directory=build $<
	pdflatex -output-directory=build $<

abstrakt.pdf: abstrakt.tex abstrakt.xmpdata
	pdflatex -output-directory=build $<

clean:
	rm -f build/*
	# rm -f *.log *.dvi *.aux *.toc *.lof *.lot *.out *.bbl *.blg *.xmpi
	# rm -f prace.pdf abstrakt.pdf
